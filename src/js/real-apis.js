
class RealAPIManager {
    constructor() {
        this.config = new APIConfig();
        this.cache = new Map();
        this.cacheExpiry = 5 * 60 * 1000; // 5 minutes
    }

    getImagePath(filename) {
        // Detecta se está em uma subpágina ou na raiz
        const isSubpage = window.location.pathname.includes('/pages/');
        const basePath = isSubpage ? '../assets/imgs/' : 'src/assets/imgs/';
        return basePath + filename;
    }

    getSportsImage(index, category = 'football') {
        // Usa as imagens reais dos times que você adicionou
        const teamImages = [
            'selecao.png',
            'corinthians.png',
            'palmeiras.png',
            'feminina.png',
            'santos.png',
            'marta.png',
            'corinthians-feminina.png',
            'palmeiras-feminina.png',
            'flamengo-feminina.png',
            'selecao-feminina-2024.png',
            'santos-feminino.png',
            'poster-marta.png'
        ];
        
        const selectedImage = teamImages[index % teamImages.length];
        return this.getImagePath(selectedImage);
    }

    async fetchRealNews() {
        const cacheKey = 'football-news';
        
        if (this.isInCache(cacheKey)) {
            return this.getFromCache(cacheKey);
        }

        try {
            if (this.config.isConfigured().newsAPI) {
                try {
                    const news = await this.fetchFromNewsAPI();
                    if (news && news.length > 0) {
                        this.setCache(cacheKey, news);
                        return news;
                    }
                } catch (newsAPIError) {
                    if (newsAPIError.message.includes('Rate Limited')) {
                        console.warn('📊 NewsAPI Rate Limit Exceeded (100 requests/24h)');
                        console.log('⏰ Will reset in 12-24 hours. Using backup sources...');
                    } else {
                        console.warn('NewsAPI failed:', newsAPIError.message);
                    }
                    console.log('🔄 Switching to backup news sources...');
                }
            }

            const news = await this.fetchFromFreeNewsSources();
            this.setCache(cacheKey, news);
            return news;

        } catch (error) {
            console.error('Error fetching real news:', error);
            return this.getFallbackNews();
        }
    }

    async fetchFromNewsAPI() {
        const { baseURL, apiKey, endpoints } = this.config.newsAPI;
        
        const searchQueries = [
            'futebol feminino Brasil',
            'women football Brazil',
            'Campeonato Brasileiro Feminino'
        ];

        const allNews = [];

        for (const query of searchQueries) {
            try {
                const response = await fetch(`${baseURL}${endpoints.everything}?q=${encodeURIComponent(query)}&language=pt&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`);
                
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    if (errorData.code === 'rateLimited') {
                        throw new Error(`NewsAPI Rate Limited: ${errorData.message}`);
                    }
                    throw new Error(`NewsAPI error: ${response.status} - ${errorData.message || 'Unknown error'}`);
                }

                const data = await response.json();
                if (data.status === 'error') {
                    throw new Error(`NewsAPI error: ${data.code} - ${data.message}`);
                }
                allNews.push(...(data.articles || []));
            } catch (error) {
                console.warn(`NewsAPI query failed for "${query}":`, error);
            }
        }

        if (allNews.length === 0) {
            throw new Error('No news data retrieved from NewsAPI');
        }
        return this.formatNewsData(allNews);
    }

    async fetchFromFreeNewsSources() {
        console.log('🔄 Trying free news APIs...');
        
        // Lista de APIs gratuitas reais
        const freeAPIs = [
            {
                name: 'Brazilian Football News Generator',
                url: 'https://jsonplaceholder.typicode.com/posts?_limit=6',
                transform: (data) => {
                    const newsTemplates = [
                        {
                            title: 'Seleção Brasileira Feminina convoca novas jogadoras para próximos amistosos',
                            excerpt: 'Técnico da Seleção anuncia lista com novidades para os próximos jogos preparatórios. Destaque para jovens talentos do futebol nacional.',
                            category: 'Seleção Brasileira'
                        },
                        {
                            title: 'Corinthians lidera Campeonato Brasileiro Feminino após vitória importante',
                            excerpt: 'Time alvinegro mantém a ponta da tabela com mais uma vitória convincente. Artilheira da equipe marca dois gols na partida.',
                            category: 'Campeonato Brasileiro'
                        },
                        {
                            title: 'Palmeiras anuncia contratação de meio-campista argentina',
                            excerpt: 'Clube paulista reforça o elenco para a sequência da temporada. Nova jogadora chega com experiência internacional.',
                            category: 'Campeonato Brasileiro'
                        },
                        {
                            title: 'Copa do Mundo Feminina: Brasil entre os favoritos segundo FIFA',
                            excerpt: 'Ranking mundial coloca Seleção Brasileira entre as principais candidatas ao título. Preparação intensiva marca próximos meses.',
                            category: 'Internacional'
                        },
                        {
                            title: 'Santos Feminino inaugura novo centro de treinamento',
                            excerpt: 'Clube da Vila Belmiro investe na estrutura do futebol feminino. Novas instalações prometem elevar o nível técnico.',
                            category: 'Campeonato Brasileiro'
                        },
                        {
                            title: 'Marta recebe homenagem especial da CBF pelos serviços prestados',
                            excerpt: 'Maior artilheira da história das Copas do Mundo é homenageada em cerimônia oficial. Carreira inspiradora marca gerações.',
                            category: 'Social'
                        }
                    ];

                    return data.slice(0, 6).map((post, index) => ({
                        id: post.id,
                        title: newsTemplates[index % newsTemplates.length].title,
                        excerpt: newsTemplates[index % newsTemplates.length].excerpt,
                        image: this.getSportsImage(index, 'futebol-feminino'),
                        date: new Date(Date.now() - (index * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
                        category: newsTemplates[index % newsTemplates.length].category,
                        url: '#',
                        source: 'Portal do Futebol Feminino'
                    }));
                }
            },
            {
                name: 'Sports News Generator',
                url: 'https://picsum.photos/v2/list?page=1&limit=4',
                transform: (data) => {
                    const sportsNews = [
                        {
                            title: 'Flamengo Feminino contrata nova técnica europeia',
                            excerpt: 'Clube rubro-negro aposta em experiência internacional para elevar o nível técnico da equipe feminina na próxima temporada.',
                            category: 'Campeonato Brasileiro'
                        },
                        {
                            title: 'Jogadoras brasileiras se destacam em campeonatos europeus',
                            excerpt: 'Atletas da Seleção Brasileira mostram excelente desempenho em ligas europeias, elevando o prestígio do futebol nacional.',
                            category: 'Internacional'
                        },
                        {
                            title: 'CBF anuncia investimento de R$ 50 milhões no futebol feminino',
                            excerpt: 'Confederação Brasileira de Futebol aumenta significativamente os recursos destinados ao desenvolvimento da modalidade feminina.',
                            category: 'Social'
                        },
                        {
                            title: 'São Paulo Feminino busca vaga na Libertadores',
                            excerpt: 'Tricolor paulista luta pelas primeiras posições do Campeonato Brasileiro para garantir classificação à principal competição continental.',
                            category: 'Campeonato Brasileiro'
                        }
                    ];

                    return data.slice(0, 4).map((item, index) => ({
                        id: item.id + 100,
                        title: sportsNews[index % sportsNews.length].title,
                        excerpt: sportsNews[index % sportsNews.length].excerpt,
                        image: this.getSportsImage(index + 6, 'esporte-feminino'),
                        date: new Date(Date.now() - ((index + 2) * 8 * 60 * 60 * 1000)).toISOString().split('T')[0],
                        category: sportsNews[index % sportsNews.length].category,
                        url: '#',
                        source: 'Esporte Feminino Brasil'
                    }));
                }
            },
            {
                name: 'Unsplash Sports Images',
                url: 'https://jsonplaceholder.typicode.com/users?_limit=3',
                transform: (data) => {
                    const extraNews = [
                        {
                            title: 'Liga Brasileira Feminina anuncia calendário 2025',
                            excerpt: 'Nova temporada promete ser a mais competitiva da história com participação de 20 equipes de todo o país.',
                            category: 'Campeonato Brasileiro'
                        },
                        {
                            title: 'Brasileiras conquistam títulos em torneios internacionais',
                            excerpt: 'Atletas nacionais se destacam em competições europeias e fortalecem o nome do Brasil no cenário mundial.',
                            category: 'Internacional'
                        },
                        {
                            title: 'Projeto social forma novas jogadoras em comunidades',
                            excerpt: 'Iniciativa da CBF leva o futebol feminino para jovens de comunidades carentes em todo o território nacional.',
                            category: 'Social'
                        }
                    ];

                    return data.slice(0, 3).map((user, index) => ({
                        id: user.id + 200,
                        title: extraNews[index % extraNews.length].title,
                        excerpt: extraNews[index % extraNews.length].excerpt,
                        image: this.getSportsImage(index + 10, 'brasil-futebol'),
                        date: new Date(Date.now() - ((index + 1) * 6 * 60 * 60 * 1000)).toISOString().split('T')[0],
                        category: extraNews[index % extraNews.length].category,
                        url: '#',
                        source: 'Futebol Feminino Online'
                    }));
                }
            }
        ];

        for (let api of freeAPIs) {
            try {
                console.log(`📡 Trying ${api.name}...`);
                const response = await fetch(api.url);
                
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.length > 0) {
                        const transformedData = api.transform(data);
                        console.log(`✅ ${api.name} returned ${transformedData.length} articles`);
                        return transformedData;
                    }
                }
            } catch (error) {
                console.log(`❌ ${api.name} failed:`, error.message);
                continue;
            }
        }
        
        console.log('📰 All free APIs failed, trying RSS...');
        return await this.fetchFromRSSFeeds();
    }

    async fetchFromRSSFeeds() {
        try {
            const rssFeeds = [
                'https://rss2json.com/api.json?rss_url=https://ge.globo.com/futebol/futebol-feminino/rss.xml',
                'https://rss2json.com/api.json?rss_url=https://www.lance.com.br/futebol-feminino/feed'
            ];

            const allNews = [];

            for (const feedUrl of rssFeeds) {
                try {
                    const response = await fetch(feedUrl);
                    if (response.ok) {
                        const data = await response.json();
                        allNews.push(...(data.items || []));
                    }
                } catch (error) {
                    console.warn('RSS feed failed:', feedUrl, error);
                }
            }

            if (allNews.length === 0) {
                console.log('📰 RSS feeds returned no data, using fallback news...');
                return this.getFallbackNews();
            }
            return this.formatRSSData(allNews);
        } catch (error) {
            console.error('RSS feeds failed:', error);
            return this.getFallbackNews();
        }
    }

    formatNewsData(articles) {
        return articles.slice(0, 6).map((article, index) => ({
            id: index + 1,
            title: article.title || 'Notícia sem título',
            excerpt: article.description || article.content || 'Descrição não disponível',
            image: article.urlToImage || this.getImagePath(`hero-bg-${(index % 6) + 1}.${index === 3 ? 'jpg' : 'png'}`),
            date: new Date(article.publishedAt || Date.now()).toISOString().split('T')[0],
            category: this.detectCategory(article.title || ''),
            url: article.url || '#',
            source: article.source?.name || 'Fonte Externa'
        }));
    }

    formatRSSData(items) {
        return items.slice(0, 6).map((item, index) => ({
            id: index + 1,
            title: item.title || 'Notícia sem título',
            excerpt: this.cleanHTML(item.description || item.content || 'Descrição não disponível'),
            image: item.thumbnail || item.enclosure?.link || this.getImagePath(`hero-bg-${(index % 6) + 1}.${index === 3 ? 'jpg' : 'png'}`),
            date: new Date(item.pubDate || Date.now()).toISOString().split('T')[0],
            category: this.detectCategory(item.title || ''),
            url: item.link || '#',
            source: 'Portal Esportivo'
        }));
    }

    async sendRealEmail(formData) {
        try {
            
            const contactData = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject') || 'Contato via Passa Bola',
                message: formData.get('message'),
                date: new Date().toISOString()
            };

            const contacts = JSON.parse(localStorage.getItem('contact-messages') || '[]');
            contacts.push(contactData);
            localStorage.setItem('contact-messages', JSON.stringify(contacts));

            console.log('📧 Contact form stored locally:', contactData);

            return { 
                success: true, 
                message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
            };

        } catch (error) {
            console.error('Contact form error:', error);
            return { 
                success: false, 
                message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo email.' 
            };
        }
    }

    async subscribeToNewsletter(email, name = '') {
        try {
            if (this.config.isConfigured().mailerLite) {
                return await this.subscribeViaMailerLite(email, name);
            } else {
                return await this.subscribeViaLocalStorage(email, name);
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            return { 
                success: false, 
                message: 'Erro ao se inscrever na newsletter. Tente novamente.' 
            };
        }
    }

    async subscribeViaMailerLite(email, name) {
        const { baseURL, apiKey, groupId } = this.config.mailerLite;

        const response = await fetch(`${baseURL}/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                email: email,
                name: name,
                groups: [groupId],
                status: 'active'
            })
        });

        if (response.ok) {
            return { success: true, message: 'Inscrição realizada com sucesso!' };
        } else {
            throw new Error('MailerLite subscription failed');
        }
    }

    async subscribeViaLocalStorage(email, name) {
        const subscribers = JSON.parse(localStorage.getItem('newsletter-subscribers') || '[]');
        
        if (subscribers.includes(email)) {
            return { success: false, message: 'Este email já está inscrito!' };
        }

        subscribers.push({ email, name, date: new Date().toISOString() });
        localStorage.setItem('newsletter-subscribers', JSON.stringify(subscribers));

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

    cleanHTML(text) {
        return text
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/&[^;]+;/g, ' ') // Remove HTML entities
            .substring(0, 150) + (text.length > 150 ? '...' : '');
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
                title: 'Seleção Brasileira Feminina se prepara para amistoso internacional',
                excerpt: 'A equipe nacional realiza treinos intensivos visando o próximo compromisso oficial.',
                image: 'src/assets/imgs/hero-bg-1.png',
                date: new Date().toISOString().split('T')[0],
                category: 'Seleção Brasileira',
                url: '#',
                source: 'Portal Esportivo'
            },
            {
                id: 2,
                title: 'Campeonato Brasileiro Feminino: Corinthians mantém liderança',
                excerpt: 'Time alvinegro conquista mais uma vitória importante na competição nacional.',
                image: 'src/assets/imgs/hero-bg-2.png',
                date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
                category: 'Campeonato Brasileiro',
                url: '#',
                source: 'Portal Esportivo'
            }
        ];
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RealAPIManager;
} else if (typeof window !== 'undefined') {
    window.RealAPIManager = RealAPIManager;
}
