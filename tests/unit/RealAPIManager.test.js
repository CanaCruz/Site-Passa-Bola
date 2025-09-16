const { TestFramework } = require('./PassaBolaApp.test.js');

class MockRealAPIManager {
    constructor() {
        this.config = new MockAPIConfig();
        this.cache = new Map();
        this.cacheExpiry = 5 * 60 * 1000;
    }

    async fetchRealNews() {
        const cacheKey = 'football-news';
        
        if (this.isInCache(cacheKey)) {
            return this.getFromCache(cacheKey);
        }

        try {
            if (this.config.isConfigured().newsAPI) {
                const news = await this.fetchFromNewsAPI();
                this.setCache(cacheKey, news);
                return news;
            }
            return this.getFallbackNews();
        } catch (error) {
            return this.getFallbackNews();
        }
    }

    async fetchFromNewsAPI() {
        return [
            {
                id: 1,
                title: 'Seleção Brasileira vence',
                excerpt: 'Brasil conquista vitória',
                image: 'test-image.jpg',
                date: '2024-01-15',
                category: 'Seleção Brasileira',
                url: 'https://test.com',
                source: 'NewsAPI'
            }
        ];
    }

    async sendRealEmail(formData) {
        try {
            if (!formData || !formData.get) {
                throw new Error('FormData inválido');
            }

            const email = formData.get('email');
            const name = formData.get('name');

            if (!email || !email.includes('@')) {
                throw new Error('Email inválido');
            }

            return { 
                success: true, 
                message: 'Mensagem enviada com sucesso!' 
            };
        } catch (error) {
            return { 
                success: false, 
                message: 'Erro ao enviar mensagem' 
            };
        }
    }

    async subscribeToNewsletter(email, name = '') {
        try {
            if (!email || !email.includes('@')) {
                throw new Error('Email inválido');
            }

            if (this.config.isConfigured().mailerLite) {
                return await this.subscribeViaMailerLite(email, name);
            } else {
                return await this.subscribeViaLocalStorage(email, name);
            }
        } catch (error) {
            return { 
                success: false, 
                message: 'Erro ao se inscrever na newsletter' 
            };
        }
    }

    async subscribeViaMailerLite(email, name) {
        return { success: true, message: 'Inscrição realizada com sucesso!' };
    }

    async subscribeViaLocalStorage(email, name) {
        return { success: true, message: 'Inscrição realizada com sucesso!' };
    }

    detectCategory(title) {
        const titleLower = title.toLowerCase();
        
        if (titleLower.includes('seleção') || titleLower.includes('brasil')) {
            return 'Seleção Brasileira';
        } else if (titleLower.includes('campeonato') || titleLower.includes('brasileirão')) {
            return 'Campeonato Brasileiro';
        } else if (titleLower.includes('internacional') || titleLower.includes('mundial')) {
            return 'Internacional';
        } else if (titleLower.includes('social') || titleLower.includes('projeto')) {
            return 'Social';
        } else {
            return 'Futebol Feminino';
        }
    }

    isInCache(key) {
        const cached = this.cache.get(key);
        return cached && (Date.now() - cached.timestamp) < this.cacheExpiry;
    }

    getFromCache(key) {
        return this.cache.get(key).data;
    }

    setCache(key, data) {
        this.cache.set(key, {
            data: data,
            timestamp: Date.now()
        });
    }

    getFallbackNews() {
        return [
            {
                id: 1,
                title: 'Seleção Brasileira Feminina se prepara para amistoso',
                excerpt: 'A equipe nacional realiza treinos intensivos.',
                image: 'fallback-image.png',
                date: new Date().toISOString().split('T')[0],
                category: 'Seleção Brasileira',
                url: '#',
                source: 'Portal Esportivo'
            }
        ];
    }
}

class MockAPIConfig {
    constructor() {
        this.newsAPI = {
            apiKey: 'test-key'
        };
        this.mailerLite = {
            apiKey: 'test-key'
        };
    }

    isConfigured() {
        return {
            newsAPI: this.newsAPI.apiKey !== 'YOUR_NEWSAPI_KEY',
            mailerLite: this.mailerLite.apiKey !== 'YOUR_MAILERLITE_API_KEY'
        };
    }
}

class MockFormData {
    constructor(data = {}) {
        this.data = data;
    }

    get(key) {
        return this.data[key];
    }
}

const framework = new TestFramework();

framework.test('fetchRealNews deve retornar array de notícias', async () => {
    const api = new MockRealAPIManager();
    const result = await api.fetchRealNews();
    return framework.expect(result).toHaveLength(1);
});


framework.test('Cache deve armazenar e recuperar dados', () => {
    const api = new MockRealAPIManager();
    const testData = [{ id: 1, title: 'Test News' }];
    
    api.setCache('test-key', testData);
    const cached = api.getFromCache('test-key');
    
    return framework.expect(cached).toHaveLength(1);
});


framework.test('Cache deve expirar após tempo limite', () => {
    const api = new MockRealAPIManager();
    api.cacheExpiry = -1; 
    
    api.setCache('test-key', ['data']);
    const isInCache = api.isInCache('test-key');
    
    return framework.expect(isInCache).toBe(false);
});


framework.test('sendRealEmail deve funcionar com dados válidos', async () => {
    const api = new MockRealAPIManager();
    const formData = new MockFormData({
        email: 'teste@exemplo.com',
        name: 'Teste',
        message: 'Mensagem de teste'
    });
    
    const result = await api.sendRealEmail(formData);
    return framework.expect(result.success).toBe(true);
});


framework.test('sendRealEmail deve falhar com email inválido', async () => {
    const api = new MockRealAPIManager();
    const formData = new MockFormData({
        email: 'email-invalido',
        name: 'Teste'
    });
    
    const result = await api.sendRealEmail(formData);
    return framework.expect(result.success).toBe(false);
});


framework.test('subscribeToNewsletter deve funcionar com email válido', async () => {
    const api = new MockRealAPIManager();
    const result = await api.subscribeToNewsletter('teste@exemplo.com', 'Teste');
    return framework.expect(result.success).toBe(true);
});


framework.test('subscribeToNewsletter deve falhar com email inválido', async () => {
    const api = new MockRealAPIManager();
    const result = await api.subscribeToNewsletter('email-invalido');
    return framework.expect(result.success).toBe(false);
});


framework.test('detectCategory deve identificar Seleção Brasileira', () => {
    const api = new MockRealAPIManager();
    const result = api.detectCategory('Seleção Brasileira convoca jogadoras');
    return framework.expect(result).toBe('Seleção Brasileira');
});


framework.test('detectCategory deve identificar Campeonato Brasileiro', () => {
    const api = new MockRealAPIManager();
    const result = api.detectCategory('Campeonato Brasileiro Feminino');
    return framework.expect(result).toBe('Campeonato Brasileiro');
});


framework.test('detectCategory deve identificar Internacional', () => {
    const api = new MockRealAPIManager();
    const result = api.detectCategory('Copa do Mundo Internacional');
    return framework.expect(result).toBe('Internacional');
});


framework.test('getFallbackNews deve retornar notícias padrão', () => {
    const api = new MockRealAPIManager();
    const result = api.getFallbackNews();
    return framework.expect(result).toHaveLength(1);
});


framework.test('isConfigured deve verificar configuração das APIs', () => {
    const api = new MockRealAPIManager();
    const result = api.config.isConfigured();
    return framework.expect(result.newsAPI).toBe(true);
});


if (typeof module !== 'undefined' && require.main === module) {
    framework.run();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MockRealAPIManager };
}
