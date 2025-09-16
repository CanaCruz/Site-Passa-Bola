const { TestFramework } = require('./PassaBolaApp.test.js');

class MockShopPage {
    constructor() {
        this.products = this.generateProducts();
        this.filteredProducts = [...this.products];
        this.displayedProducts = 8;
        this.productsPerLoad = 4;
        this.currentFilter = 'all';
        this.cart = [];
    }

    init() {
        this.setupEventListeners();
        this.renderProducts();
        this.updateCartCount();
        return true;
    }

    generateProducts() {
        return [
            {
                id: 1,
                name: 'Camisa Seleção Brasileira Feminina 2024',
                price: 129.90,
                image: '../assets/imgs/selecao-feminina-2024.png',
                category: 'camisas',
                description: 'Camisa oficial da Seleção Brasileira Feminina.',
                sizes: ['P', 'M', 'G', 'GG']
            },
            {
                id: 2,
                name: 'Boné Passa Bola Rosa',
                price: 39.90,
                image: '../assets/imgs/bone-rosa.png',
                category: 'acessorios',
                description: 'Boné exclusivo da marca Passa Bola.',
                sizes: ['Único']
            },
            {
                id: 3,
                name: 'Chuteira Feminina Profissional',
                price: 299.90,
                image: '../assets/imgs/chuteira-profissional.png',
                category: 'calcados',
                description: 'Chuteira de alta performance.',
                sizes: ['35', '36', '37', '38', '39', '40']
            }
        ];
    }

    renderProducts() {
        return this.filteredProducts.slice(0, this.displayedProducts);
    }

    filterProducts(category) {
        this.currentFilter = category;
        if (category === 'all') {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product => product.category === category);
        }
        this.displayedProducts = this.productsPerLoad;
        return this.renderProducts();
    }

    loadMoreProducts() {
        this.displayedProducts += this.productsPerLoad;
        return this.renderProducts();
    }

    addToCart(productId, size, quantity = 1) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return false;

        const existingItem = this.cart.find(item => 
            item.id === productId && item.selectedSize === size
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                ...product,
                selectedSize: size,
                quantity: quantity
            });
        }

        this.saveCart();
        this.updateCartCount();
        return true;
    }

    removeFromCart(productId, size) {
        this.cart = this.cart.filter(item => 
            !(item.id === productId && item.selectedSize === size)
        );
        this.saveCart();
        this.updateCartCount();
        return true;
    }

    updateCartCount() {
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        return totalItems;
    }

    calculateTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    saveCart() {
        return true;
    }

    loadCart() {
        return this.cart;
    }

    checkout() {
        if (this.cart.length === 0) {
            return { success: false, message: 'Carrinho vazio' };
        }
        
        const total = this.calculateTotal();
        this.cart = [];
        this.saveCart();
        this.updateCartCount();
        
        return { 
            success: true, 
            message: `Compra realizada com sucesso! Total: R$ ${total.toFixed(2)}` 
        };
    }

    setupEventListeners() {
        return true;
    }

    openProductModal(productId) {
        const product = this.products.find(p => p.id === productId);
        return product ? { modalOpen: true, product } : { modalOpen: false };
    }

    closeProductModal() {
        return { modalOpen: false };
    }

    openCartModal() {
        return { cartModalOpen: true, items: this.cart };
    }

    closeCartModal() {
        return { cartModalOpen: false };
    }
}

const framework = new TestFramework();

framework.test('ShopPage deve inicializar corretamente', () => {
    const shop = new MockShopPage();
    const result = shop.init();
    return framework.expect(result).toBe(true);
});

framework.test('generateProducts deve retornar array de produtos', () => {
    const shop = new MockShopPage();
    const result = shop.generateProducts();
    return framework.expect(result).toHaveLength(3);
});

framework.test('renderProducts deve retornar produtos limitados', () => {
    const shop = new MockShopPage();
    shop.displayedProducts = 2;
    const result = shop.renderProducts();
    return framework.expect(result).toHaveLength(2);
});

framework.test('filterProducts deve filtrar por categoria', () => {
    const shop = new MockShopPage();
    const result = shop.filterProducts('camisas');
    return framework.expect(result).toHaveLength(1);
});

framework.test('filterProducts com "all" deve mostrar todos', () => {
    const shop = new MockShopPage();
    const result = shop.filterProducts('all');
    return framework.expect(result).toHaveLength(3);
});

framework.test('loadMoreProducts deve aumentar quantidade', () => {
    const shop = new MockShopPage();
    shop.displayedProducts = 1;
    shop.loadMoreProducts();
    const result = shop.renderProducts();
    return framework.expect(result.length).toBeGreaterThan(1);
});

framework.test('addToCart deve adicionar produto ao carrinho', () => {
    const shop = new MockShopPage();
    const result = shop.addToCart(1, 'M', 2);
    return framework.expect(result).toBe(true);
});

framework.test('addToCart deve incrementar quantidade se item existe', () => {
    const shop = new MockShopPage();
    shop.addToCart(1, 'M', 1);
    shop.addToCart(1, 'M', 1);
    return framework.expect(shop.cart[0].quantity).toBe(2);
});

framework.test('removeFromCart deve remover item do carrinho', () => {
    const shop = new MockShopPage();
    shop.addToCart(1, 'M', 1);
    shop.removeFromCart(1, 'M');
    return framework.expect(shop.cart).toHaveLength(0);
});

framework.test('updateCartCount deve contar total de itens', () => {
    const shop = new MockShopPage();
    shop.addToCart(1, 'M', 2);
    shop.addToCart(2, 'Único', 1);
    const result = shop.updateCartCount();
    return framework.expect(result).toBe(3);
});

framework.test('calculateTotal deve somar preços dos itens', () => {
    const shop = new MockShopPage();
    shop.addToCart(1, 'M', 1);
    shop.addToCart(2, 'Único', 1);
    const result = shop.calculateTotal();
    return framework.expect(result).toBe(169.80);
});

framework.test('checkout deve processar compra com sucesso', () => {
    const shop = new MockShopPage();
    shop.addToCart(1, 'M', 1);
    const result = shop.checkout();
    return framework.expect(result.success).toBe(true);
});

framework.test('checkout deve falhar com carrinho vazio', () => {
    const shop = new MockShopPage();
    const result = shop.checkout();
    return framework.expect(result.success).toBe(false);
});

framework.test('openProductModal deve abrir modal do produto', () => {
    const shop = new MockShopPage();
    const result = shop.openProductModal(1);
    return framework.expect(result.modalOpen).toBe(true);
});

framework.test('openProductModal deve falhar com ID inválido', () => {
    const shop = new MockShopPage();
    const result = shop.openProductModal(999);
    return framework.expect(result.modalOpen).toBe(false);
});

framework.test('openCartModal deve abrir modal do carrinho', () => {
    const shop = new MockShopPage();
    const result = shop.openCartModal();
    return framework.expect(result.cartModalOpen).toBe(true);
});

if (typeof module !== 'undefined' && require.main === module) {
    framework.run();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MockShopPage };
}
