// Passa Bola Website JavaScript
class PassaBolaApp {
    constructor() {
        this.currentUser = null;
        this.newsData = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadNews();
        this.setupIntersectionObserver();
        this.setupBackgroundRotation();
    }

    setupEventListeners() {
        // Navigation - Now handles real page navigation
        // No need to prevent default behavior for multi-page navigation

        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Login modal
        const loginBtn = document.getElementById('loginBtn');
        const mobileLoginBtn = document.getElementById('mobileLoginBtn');
        const loginModal = document.getElementById('loginModal');
        const closeLoginModal = document.getElementById('closeLoginModal');

        // Verificar se os elementos existem antes de adicionar event listeners
        if (loginBtn && loginModal) {
            loginBtn.addEventListener('click', () => {
                loginModal.classList.remove('hidden');
            });
        }

        if (mobileLoginBtn && loginModal) {
            mobileLoginBtn.addEventListener('click', () => {
                loginModal.classList.remove('hidden');
            });
        }

        if (closeLoginModal && loginModal) {
            closeLoginModal.addEventListener('click', () => {
                loginModal.classList.add('hidden');
            });
        }

        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin(e.target);
            });
        }

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(e.target);
            });
        }

        // Close modal on outside click
        if (loginModal) {
            loginModal.addEventListener('click', (e) => {
                if (e.target === loginModal) {
                    loginModal.classList.add('hidden');
                }
            });
        }
    }

    // Mobile menu close helper
    closeMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    }

    async handleLogin(form) {
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            this.showLoading(true);
            
            // Simular delay de processamento
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Simple validation
            if (email && password) {
                this.currentUser = { email, name: email.split('@')[0] };
                this.showSuccess('Login realizado com sucesso!');
                const modal = document.getElementById('loginModal');
                if (modal) {
                    modal.classList.add('hidden');
                }
                this.updateLoginButton();
            } else {
                throw new Error('Email e senha são obrigatórios');
            }
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.showLoading(false);
        }
    }

    async handleContactForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            this.showLoading(true);
            
            // Simular delay de processamento
            await new Promise(resolve => setTimeout(resolve, 500));
            
            this.showSuccess('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        } catch (error) {
            this.showError('Erro ao enviar mensagem. Tente novamente.');
        } finally {
            this.showLoading(false);
        }
    }

    loadNews() {
        // Carregamento instantâneo das notícias - sem simulação de API
        
        // Mock news data
        this.newsData = [
                {
                    id: 1,
                    title: 'Seleção Brasileira Feminina vence amistoso internacional',
                    excerpt: 'A seleção brasileira feminina conquistou uma importante vitória em amistoso contra a seleção da França.',
                    image: 'src/assets/imgs/hero-bg-1.png',
                    date: '2024-01-15',
                    category: 'Seleção Brasileira'
                },
                {
                    id: 2,
                    title: 'Campeonato Brasileiro Feminino: Corinthians lidera tabela',
                    excerpt: 'O Corinthians mantém a liderança do Campeonato Brasileiro Feminino após vitória sobre o São Paulo.',
                    image: 'src/assets/imgs/hero-bg-2.png',
                    date: '2024-01-14',
                    category: 'Campeonato Brasileiro'
                },
                {
                    id: 3,
                    title: 'Artilheira do Brasileirão bate recorde histórico',
                    excerpt: 'Jogadora marca 25 gols no Campeonato Brasileiro e quebra recorde da competição.',
                    image: 'src/assets/imgs/hero-bg-3.png',
                    date: '2024-01-13',
                    category: 'Campeonato Brasileiro'
                },
                {
                    id: 4,
                    title: 'Projeto social promove futebol feminino em comunidades',
                    excerpt: 'Iniciativa leva futebol feminino para comunidades carentes, promovendo inclusão social.',
                    image: 'src/assets/imgs/hero-bg-4.jpg',
                    date: '2024-01-12',
                    category: 'Social'
                },
                {
                    id: 5,
                    title: 'Campeonato Brasileiro Feminino: Temporada promete',
                    excerpt: 'Times se preparam para mais uma edição do Campeonato Brasileiro Feminino.',
                    image: 'src/assets/imgs/hero-bg-5.png',
                    date: '2024-01-11',
                    category: 'Campeonato'
                },
                {
                    id: 6,
                    title: 'Liga dos Campeões Feminina: Brasileiras em destaque',
                    excerpt: 'Jogadoras brasileiras se destacam na Liga dos Campeões Feminina da UEFA.',
                    image: 'src/assets/imgs/hero-bg-6.png?v=2025',
                    date: '2024-01-10',
                    category: 'Internacional'
                }
            ];

        this.renderNews();
    }

    renderNews() {
        const container = document.getElementById('newsContainer');
        
        // Verificar se o container existe (pode não existir na página inicial)
        if (!container) {
            return;
        }
        
        if (this.newsData.length === 0) {
            container.innerHTML = '<p class="text-center text-gray-500 col-span-full">Nenhuma notícia disponível no momento.</p>';
            return;
        }

        container.innerHTML = this.newsData.map(news => `
            <article class="news-card card-hover">
                <img src="${news.image}" alt="${news.title}" style="width: 100%; height: 200px; object-fit: cover; object-position: center top; display: block;">
                <div class="news-card-content">
                    <div class="date mb-2">${this.formatDate(news.date)}</div>
                    <h3>${news.title}</h3>
                    <p class="mt-2">${news.excerpt}</p>
                    <div class="mt-4">
                        <span class="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                            ${news.category}
                        </span>
                    </div>
                </div>
            </article>
        `).join('');
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    updateLoginButton() {
        const loginBtn = document.getElementById('loginBtn');
        const mobileLoginBtn = document.getElementById('mobileLoginBtn');
        
        if (this.currentUser) {
            if (loginBtn) {
                loginBtn.textContent = this.currentUser.name;
                loginBtn.classList.remove('bg-gradient-to-r', 'from-purple-500', 'to-pink-500');
                loginBtn.classList.add('bg-green-500');
            }
            if (mobileLoginBtn) {
                mobileLoginBtn.textContent = this.currentUser.name;
                mobileLoginBtn.classList.remove('bg-gradient-to-r', 'from-purple-500', 'to-pink-500');
                mobileLoginBtn.classList.add('bg-green-500');
            }
        }
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    setupBackgroundRotation() {
        // Add background images to hero section
        const heroSection = document.querySelector('#home');
        heroSection.classList.add('hero-bg');
    }

    showLoading(show, specificButton = null) {
        if (specificButton) {
            // Se um botão específico foi fornecido, apenas afeta esse botão
            if (show) {
                specificButton.disabled = true;
                specificButton.setAttribute('data-original-text', specificButton.innerHTML);
                specificButton.innerHTML = '<span class="loading"></span> Carregando...';
            } else {
                specificButton.disabled = false;
                specificButton.innerHTML = specificButton.getAttribute('data-original-text') || 'Enviar';
            }
        } else {
            // Comportamento original - afeta todos os botões submit
            const buttons = document.querySelectorAll('button[type="submit"]');
            buttons.forEach(btn => {
                if (show) {
                    btn.disabled = true;
                    btn.setAttribute('data-original-text', btn.innerHTML);
                    btn.innerHTML = '<span class="loading"></span> Carregando...';
                } else {
                    btn.disabled = false;
                    btn.innerHTML = btn.getAttribute('data-original-text') || 'Enviar';
                }
            });
        }
    }

    showError(message) {
        const toast = document.getElementById('errorToast');
        const messageEl = document.getElementById('errorMessage');
        
        messageEl.textContent = message;
        toast.classList.remove('hidden');
        toast.classList.add('toast-slide-in');
        
        setTimeout(() => {
            toast.classList.add('toast-slide-out');
            setTimeout(() => {
                toast.classList.add('hidden');
                toast.classList.remove('toast-slide-in', 'toast-slide-out');
            }, 300);
        }, 5000);
    }

    showSuccess(message) {
        const toast = document.getElementById('successToast');
        const messageEl = document.getElementById('successMessage');
        
        messageEl.textContent = message;
        toast.classList.remove('hidden');
        toast.classList.add('toast-slide-in');
        
        setTimeout(() => {
            toast.classList.add('toast-slide-out');
            setTimeout(() => {
                toast.classList.add('hidden');
                toast.classList.remove('toast-slide-in', 'toast-slide-out');
            }, 300);
        }, 5000);
    }


    // API integration methods
    async fetchNewsFromAPI() {
        try {
            // This would be a real API call
            const response = await fetch('/api/news');
            if (!response.ok) {
                throw new Error('Falha ao carregar notícias');
            }
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    async submitContactForm(data) {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error('Falha ao enviar mensagem');
            }
            
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    async authenticateUser(credentials) {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });
            
            if (!response.ok) {
                throw new Error('Credenciais inválidas');
            }
            
            const userData = await response.json();
            localStorage.setItem('user', JSON.stringify(userData));
            return userData;
        } catch (error) {
            console.error('Auth Error:', error);
            throw error;
        }
    }

    // Error handling
    handleError(error, context = '') {
        console.error(`Error in ${context}:`, error);
        
        let userMessage = 'Ocorreu um erro inesperado. Tente novamente.';
        
        if (error.message) {
            userMessage = error.message;
        } else if (error.status) {
            switch (error.status) {
                case 401:
                    userMessage = 'Não autorizado. Verifique suas credenciais.';
                    break;
                case 403:
                    userMessage = 'Acesso negado.';
                    break;
                case 404:
                    userMessage = 'Recurso não encontrado.';
                    break;
                case 500:
                    userMessage = 'Erro interno do servidor. Tente novamente mais tarde.';
                    break;
                default:
                    userMessage = 'Erro de conexão. Verifique sua internet.';
            }
        }
        
        this.showError(userMessage);
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PassaBolaApp();
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PassaBolaApp;
}
