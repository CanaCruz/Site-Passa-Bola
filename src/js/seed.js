class SeedData {
    static generateNews() {
        return [
            {
                id: 1,
                title: 'Seleção Brasileira Feminina vence amistoso internacional',
                excerpt: 'A seleção brasileira feminina conquistou uma importante vitória em amistoso contra a seleção da França.',
                image: 'src/assets/imgs/hero-bg-1.png',
                date: '2024-01-15',
                category: 'Seleção Brasileira',
                filter: 'selecao',
                source: 'Portal Esportivo'
            },
            {
                id: 2,
                title: 'Campeonato Brasileiro Feminino: Corinthians lidera tabela',
                excerpt: 'O Corinthians mantém a liderança do Campeonato Brasileiro Feminino após vitória sobre o São Paulo.',
                image: 'src/assets/imgs/hero-bg-2.png',
                date: '2024-01-14',
                category: 'Campeonato Brasileiro',
                filter: 'campeonato',
                source: 'Portal Esportivo'
            },
            {
                id: 3,
                title: 'Artilheira do Brasileirão bate recorde histórico',
                excerpt: 'Jogadora marca 25 gols no Campeonato Brasileiro e quebra recorde da competição.',
                image: 'src/assets/imgs/hero-bg-3.png',
                date: '2024-01-13',
                category: 'Campeonato Brasileiro',
                filter: 'campeonato',
                source: 'Portal Esportivo'
            },
            {
                id: 4,
                title: 'Projeto social promove futebol feminino em comunidades',
                excerpt: 'Iniciativa leva futebol feminino para comunidades carentes, promovendo inclusão social.',
                image: 'src/assets/imgs/hero-bg-4.jpg',
                date: '2024-01-12',
                category: 'Social',
                filter: 'social',
                source: 'Portal Esportivo'
            },
            {
                id: 5,
                title: 'Liga dos Campeões Feminina: Brasileiras em destaque',
                excerpt: 'Jogadoras brasileiras se destacam na competição europeia e chamam atenção de grandes clubes.',
                image: 'src/assets/imgs/hero-bg-6.png',
                date: '2024-01-11',
                category: 'Internacional',
                filter: 'internacional',
                source: 'Portal Esportivo'
            },
            {
                id: 6,
                title: 'Santos conquista título da Copa Paulista Feminina',
                excerpt: 'Time santista vence final e conquista o título estadual de forma invicta.',
                image: 'src/assets/imgs/hero-bg-5.png',
                date: '2024-01-10',
                category: 'Campeonato Brasileiro',
                filter: 'campeonato',
                source: 'Portal Esportivo'
            }
        ];
    }

    static generateProducts() {
        return [
            {
                id: 1,
                name: 'Camisa Seleção Brasileira Feminina 2024',
                price: 129.90,
                image: '../assets/imgs/selecao-feminina-2024.png',
                category: 'camisas',
                description: 'Camisa oficial da Seleção Brasileira Feminina com tecnologia Dri-FIT.',
                sizes: ['P', 'M', 'G', 'GG']
            },
            {
                id: 2,
                name: 'Camisa Corinthians Feminina',
                price: 89.90,
                image: '../assets/imgs/corinthians-feminina.png',
                category: 'camisas',
                description: 'Camisa do Corinthians especial para torcedoras apaixonadas.',
                sizes: ['P', 'M', 'G', 'GG']
            },
            {
                id: 3,
                name: 'Camisa Santos Feminina Vintage',
                price: 99.90,
                image: '../assets/imgs/santos-feminino.png?v=2',
                category: 'camisas',
                description: 'Edição vintage da camisa do Santos Futebol Clube.',
                sizes: ['P', 'M', 'G', 'GG']
            },
            {
                id: 4,
                name: 'Boné Passa Bola Rosa',
                price: 39.90,
                image: '../assets/imgs/bone-rosa.png',
                category: 'acessorios',
                description: 'Boné exclusivo da marca Passa Bola em rosa vibrante.',
                sizes: ['Único']
            },
            {
                id: 5,
                name: 'Mochila Futebol Feminino',
                price: 69.90,
                image: '../assets/imgs/mochila-futebol.png',
                category: 'acessorios',
                description: 'Mochila esportiva ideal para treinos e viagens.',
                sizes: ['Único']
            },
            {
                id: 6,
                name: 'Cachecol Torcedora',
                price: 34.90,
                image: '../assets/imgs/cachecol-torcedora.png?v=2',
                category: 'acessorios',
                description: 'Cachecol oficial para torcedoras apaixonadas.',
                sizes: ['Único']
            },
            {
                id: 7,
                name: 'Chuteira Feminina Profissional',
                price: 299.90,
                image: '../assets/imgs/chuteira-profissional.png',
                category: 'calcados',
                description: 'Chuteira de alta performance para jogadoras profissionais.',
                sizes: ['35', '36', '37', '38', '39', '40']
            },
            {
                id: 8,
                name: 'Bola Oficial FIFA Feminina',
                price: 89.90,
                image: '../assets/imgs/bola-fifa-feminina.png',
                category: 'equipamentos',
                description: 'Bola oficial aprovada pela FIFA para competições femininas.',
                sizes: ['Único']
            },
            {
                id: 9,
                name: 'Kit Presente Torcedora',
                price: 159.90,
                image: '../assets/imgs/kit-presente.png',
                category: 'kits',
                description: 'Kit especial com produtos exclusivos para torcedoras.',
                sizes: ['P/M', 'G/GG']
            },
            {
                id: 10,
                name: 'Poster Marta Edição Limitada',
                price: 24.90,
                image: '../assets/imgs/poster-marta.png',
                category: 'decoracao',
                description: 'Poster exclusivo da rainha Marta em edição limitada.',
                sizes: ['Único']
            },
            {
                id: 11,
                name: 'Camisa Palmeiras Feminina',
                price: 94.90,
                image: '../assets/imgs/palmeiras-feminina.png',
                category: 'camisas',
                description: 'Camisa oficial do Palmeiras para a torcida feminina.',
                sizes: ['P', 'M', 'G', 'GG']
            },
            {
                id: 12,
                name: 'Camisa Flamengo Feminina',
                price: 99.90,
                image: '../assets/imgs/flamengo-feminina.png',
                category: 'camisas',
                description: 'Camisa oficial do Flamengo com design exclusivo.',
                sizes: ['P', 'M', 'G', 'GG']
            }
        ];
    }

    static generateMockNewsForCategories() {
        return {
            selecao: [
                {
                    id: 100,
                    title: 'Seleção Brasileira Feminina convoca novas jogadoras',
                    excerpt: 'Técnico anuncia lista para próximos amistosos internacionais.',
                    image: '../assets/imgs/hero-bg-1.png',
                    date: '2024-01-15',
                    category: 'Seleção Brasileira',
                    filter: 'selecao',
                    source: 'Portal Esportivo'
                }
            ],
            campeonato: [
                {
                    id: 101,
                    title: 'Campeonato Brasileiro Feminino: Corinthians lidera tabela',
                    excerpt: 'O Corinthians mantém a liderança do Campeonato Brasileiro Feminino após vitória sobre o São Paulo.',
                    image: '../assets/imgs/hero-bg-2.png',
                    date: '2024-01-14',
                    category: 'Campeonato Brasileiro',
                    filter: 'campeonato',
                    source: 'Portal Esportivo'
                },
                {
                    id: 102,
                    title: 'Artilheira histórica marca 30º gol na temporada',
                    excerpt: 'Jogadora bate recorde pessoal e se aproxima do recorde histórico do campeonato.',
                    image: '../assets/imgs/hero-bg-5.png',
                    date: '2024-01-12',
                    category: 'Campeonato Brasileiro',
                    filter: 'campeonato',
                    source: 'Portal Esportivo'
                },
                {
                    id: 103,
                    title: 'Santos vence clássico e cola na liderança',
                    excerpt: 'Time santista vence clássico paulista e se aproxima do topo da tabela.',
                    image: '../assets/imgs/hero-bg-3.png',
                    date: '2024-01-11',
                    category: 'Campeonato Brasileiro',
                    filter: 'campeonato',
                    source: 'Portal Esportivo'
                }
            ],
            internacional: [
                {
                    id: 104,
                    title: 'Liga dos Campeões Feminina: Brasileiras em destaque',
                    excerpt: 'Jogadoras brasileiras se destacam na Liga dos Campeões Feminina da UEFA.',
                    image: '../assets/imgs/hero-bg-6.png',
                    date: '2024-01-10',
                    category: 'Internacional',
                    filter: 'internacional',
                    source: 'Portal Esportivo'
                }
            ],
            social: [
                {
                    id: 105,
                    title: 'Projeto social transforma vidas através do futebol feminino',
                    excerpt: 'ONG promove inclusão social através do esporte em comunidades carentes.',
                    image: '../assets/imgs/hero-bg-4.jpg',
                    date: '2024-01-09',
                    category: 'Social',
                    filter: 'social',
                    source: 'Portal Esportivo'
                }
            ]
        };
    }

    static generateTestUsers() {
        return [
            {
                id: 1,
                username: 'admin',
                password: 'senha123',
                email: 'admin@passabola.com',
                role: 'admin'
            },
            {
                id: 2,
                username: 'editor',
                password: 'editor123',
                email: 'editor@passabola.com',
                role: 'editor'
            },
            {
                id: 3,
                username: 'user',
                password: 'user123',
                email: 'user@passabola.com',
                role: 'user'
            }
        ];
    }

    static generateNewsletterSubscribers() {
        return [
            {
                email: 'maria.silva@email.com',
                name: 'Maria Silva',
                date: '2024-01-01T10:00:00.000Z'
            },
            {
                email: 'ana.santos@email.com',
                name: 'Ana Santos',
                date: '2024-01-02T14:30:00.000Z'
            },
            {
                email: 'carla.oliveira@email.com',
                name: 'Carla Oliveira',
                date: '2024-01-03T09:15:00.000Z'
            }
        ];
    }

    static generateContactMessages() {
        return [
            {
                name: 'João Silva',
                email: 'joao@email.com',
                subject: 'Dúvida sobre produtos',
                message: 'Gostaria de saber mais sobre os produtos disponíveis na loja.',
                date: '2024-01-01T10:00:00.000Z'
            },
            {
                name: 'Ana Costa',
                email: 'ana@email.com',
                subject: 'Sugestão de melhoria',
                message: 'Sugiro adicionar mais produtos para goleiras.',
                date: '2024-01-02T15:20:00.000Z'
            }
        ];
    }

    static seedLocalStorage() {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('newsletter-subscribers', JSON.stringify(this.generateNewsletterSubscribers()));
            localStorage.setItem('contact-messages', JSON.stringify(this.generateContactMessages()));
            localStorage.setItem('passa-bola-cart', JSON.stringify([]));
            console.log('✅ LocalStorage seeded successfully');
        } else {
            console.log('⚠️  LocalStorage not available');
        }
    }

    static getAllSeedData() {
        return {
            news: this.generateNews(),
            products: this.generateProducts(),
            mockNews: this.generateMockNewsForCategories(),
            users: this.generateTestUsers(),
            subscribers: this.generateNewsletterSubscribers(),
            contacts: this.generateContactMessages()
        };
    }

    static printSeedSummary() {
        const data = this.getAllSeedData();
        console.log('\n📋 Seed Data Summary:');
        console.log(`📰 News Articles: ${data.news.length}`);
        console.log(`🛍️  Products: ${data.products.length}`);
        console.log(`📱 Mock News Categories: ${Object.keys(data.mockNews).length}`);
        console.log(`👤 Test Users: ${data.users.length}`);
        console.log(`📧 Newsletter Subscribers: ${data.subscribers.length}`);
        console.log(`💌 Contact Messages: ${data.contacts.length}`);
        console.log('\n🚀 All seed data generated successfully!');
    }
}

if (typeof module !== 'undefined' && require.main === module) {
    console.log('🌱 Running Passa Bola Seed Script...\n');
    SeedData.seedLocalStorage();
    SeedData.printSeedSummary();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SeedData;
} else if (typeof window !== 'undefined') {
    window.SeedData = SeedData;
}
