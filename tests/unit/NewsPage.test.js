const { TestFramework } = require('./PassaBolaApp.test.js');

class MockNewsPage {
    constructor() {
        this.allNewsData = [];
        this.displayedNews = 6;
        this.newsPerLoad = 6;
        this.currentFilter = 'all';
        this.isLoading = false;
    }

    async init() {
        await this.loadNews();
        this.setupEventListeners();
        return true;
    }

    async loadNews() {
        try {
            this.isLoading = true;
            
           
            const apiNews = [
                {
                    id: 1,
                    title: 'API News 1',
                    excerpt: 'Notícia da API',
                    filter: 'api',
                    category: 'Futebol Feminino'
                }
            ];

            
            const mockNews = [
                {
                    id: 100,
                    title: 'Seleção Brasileira convoca',
                    excerpt: 'Nova convocação',
                    filter: 'selecao',
                    category: 'Seleção Brasileira'
                },
                {
                    id: 101,
                    title: 'Corinthians lidera',
                    excerpt: 'Liderança do campeonato',
                    filter: 'campeonato',
                    category: 'Campeonato Brasileiro'
                }
            ];

            this.allNewsData = [...apiNews, ...mockNews];
            return this.allNewsData;
        } catch (error) {
            throw error;
        } finally {
            this.isLoading = false;
        }
    }

    renderNews() {
        let filteredNews = this.allNewsData;

        if (this.currentFilter !== 'all') {
            
            filteredNews = this.allNewsData.filter(news => 
                news.filter !== 'api' && news.filter === this.currentFilter
            );
        }

        return filteredNews.slice(0, this.displayedNews);
    }

    filterNews(filterType) {
        this.currentFilter = filterType;
        this.displayedNews = this.newsPerLoad;
        return this.renderNews();
    }

    loadMoreNews() {
        this.displayedNews += this.newsPerLoad;
        return this.renderNews();
    }

    categorizeNews(title) {
        const titleLower = title.toLowerCase();
        
        if (titleLower.includes('seleção') || titleLower.includes('brasil')) {
            return 'selecao';
        } else if (titleLower.includes('campeonato') || titleLower.includes('brasileirão')) {
            return 'campeonato';
        } else if (titleLower.includes('internacional') || titleLower.includes('mundial')) {
            return 'internacional';
        } else if (titleLower.includes('social') || titleLower.includes('projeto')) {
            return 'social';
        } else {
            return 'campeonato';
        }
    }

    setupEventListeners() {
        return true;
    }

    showLoadingState(show) {
        this.isLoading = show;
        return this.isLoading;
    }

    showErrorState() {
        return { error: true, message: 'Erro ao carregar notícias' };
    }

    updateFilterCounts() {
        const counts = {
            all: this.allNewsData.length,
            selecao: this.allNewsData.filter(n => n.filter === 'selecao').length,
            campeonato: this.allNewsData.filter(n => n.filter === 'campeonato').length,
            internacional: this.allNewsData.filter(n => n.filter === 'internacional').length,
            social: this.allNewsData.filter(n => n.filter === 'social').length
        };
        return counts;
    }

    openLoginModal() {
        return { modalOpen: true };
    }

    closeLoginModal() {
        return { modalOpen: false };
    }

    toggleMobileMenu() {
        return { mobileMenuOpen: true };
    }

    showToast(message, type = 'success') {
        return { message, type };
    }
}

const framework = new TestFramework();


framework.test('NewsPage deve inicializar corretamente', async () => {
    const newsPage = new MockNewsPage();
    const result = await newsPage.init();
    return framework.expect(result).toBe(true);
});


framework.test('loadNews deve carregar notícias API e mock', async () => {
    const newsPage = new MockNewsPage();
    const result = await newsPage.loadNews();
    return framework.expect(result).toHaveLength(3);
});


framework.test('renderNews deve mostrar todas as notícias por padrão', async () => {
    const newsPage = new MockNewsPage();
    await newsPage.loadNews();
    const result = newsPage.renderNews();
    return framework.expect(result).toHaveLength(3);
});


framework.test('filterNews deve filtrar apenas notícias de seleção', async () => {
    const newsPage = new MockNewsPage();
    await newsPage.loadNews();
    const result = newsPage.filterNews('selecao');
    return framework.expect(result).toHaveLength(1);
});


framework.test('filterNews deve filtrar apenas notícias de campeonato', async () => {
    const newsPage = new MockNewsPage();
    await newsPage.loadNews();
    const result = newsPage.filterNews('campeonato');
    return framework.expect(result).toHaveLength(1);
});


framework.test('filterNews com "all" deve incluir notícias da API', async () => {
    const newsPage = new MockNewsPage();
    await newsPage.loadNews();
    const result = newsPage.filterNews('all');
    const hasAPINews = result.some(news => news.filter === 'api');
    return framework.expect(hasAPINews).toBe(true);
});


framework.test('Filtros específicos devem excluir notícias da API', async () => {
    const newsPage = new MockNewsPage();
    await newsPage.loadNews();
    const result = newsPage.filterNews('selecao');
    const hasAPINews = result.some(news => news.filter === 'api');
    return framework.expect(hasAPINews).toBe(false);
});


framework.test('loadMoreNews deve aumentar quantidade exibida', async () => {
    const newsPage = new MockNewsPage();
    await newsPage.loadNews();
    
    newsPage.displayedNews = 1;
    const before = newsPage.renderNews().length;
    
    newsPage.loadMoreNews();
    const after = newsPage.renderNews().length;
    
    return framework.expect(after).toBeGreaterThan(before);
});


framework.test('categorizeNews deve identificar seleção', () => {
    const newsPage = new MockNewsPage();
    const result = newsPage.categorizeNews('Seleção Brasileira convoca');
    return framework.expect(result).toBe('selecao');
});


framework.test('categorizeNews deve identificar campeonato', () => {
    const newsPage = new MockNewsPage();
    const result = newsPage.categorizeNews('Campeonato Brasileiro lidera');
    return framework.expect(result).toBe('campeonato');
});


framework.test('categorizeNews deve usar campeonato como padrão', () => {
    const newsPage = new MockNewsPage();
    const result = newsPage.categorizeNews('Notícia genérica de futebol');
    return framework.expect(result).toBe('campeonato');
});


framework.test('showLoadingState deve controlar estado de loading', () => {
    const newsPage = new MockNewsPage();
    newsPage.showLoadingState(true);
    return framework.expect(newsPage.isLoading).toBe(true);
});


framework.test('showErrorState deve retornar objeto de erro', () => {
    const newsPage = new MockNewsPage();
    const result = newsPage.showErrorState();
    return framework.expect(result.error).toBe(true);
});


framework.test('updateFilterCounts deve contar notícias por categoria', async () => {
    const newsPage = new MockNewsPage();
    await newsPage.loadNews();
    const counts = newsPage.updateFilterCounts();
    return framework.expect(counts.all).toBe(3);
});


framework.test('openLoginModal deve abrir modal', () => {
    const newsPage = new MockNewsPage();
    const result = newsPage.openLoginModal();
    return framework.expect(result.modalOpen).toBe(true);
});


framework.test('showToast deve exibir mensagem', () => {
    const newsPage = new MockNewsPage();
    const result = newsPage.showToast('Teste de mensagem');
    return framework.expect(result.type).toBe('success');
});

if (typeof module !== 'undefined' && require.main === module) {
    framework.run();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MockNewsPage };
}
