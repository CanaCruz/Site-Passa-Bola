// 🌐 API Configuration for Passa Bola
// Real API integrations for news, contact forms, and sports data

class APIConfig {
    constructor() {
        // 📰 News API Configuration
        this.newsAPI = {
            baseURL: 'https://newsapi.org/v2',
            apiKey: '41b8e7f7382e420e90584ceb96542157', // NewsAPI key configured
            endpoints: {
                everything: '/everything',
                topHeadlines: '/top-headlines'
            }
        };

        // 📬 MailerLite Configuration
        this.mailerLite = {
            baseURL: 'https://connect.mailerlite.com/api',
            apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiN2M4Mjg4ZjU4YjEzNmZkMjE4ZmVmZjU4MmE5ZTUwZDAwZTYyYWYwOTJkYmMzN2ZjNzE2MjhhZWE3ZjIzMTY3ZTFmOThkMjE0MWUxYThiNmUiLCJpYXQiOjE3NTc5NzIxNzguNTc4NjA4LCJuYmYiOjE3NTc5NzIxNzguNTc4NjExLCJleHAiOjQ5MTM2NDU3NzguNTczNzU0LCJzdWIiOiIxODEzNDk4Iiwic2NvcGVzIjpbXX0.hzHdArDowHoXfVn1ALytxtSNWFFuh0ppG2D1IeVZY53zwGWjcRfq2-lIHZ34urQQr33x3Vo3GL4gYyLC67P-R4hn4Y-MPq2xhExC2LNejTmPpWtiLjf8WB65pt2UA_hEDsrWzrtl1UwKQyLN1s6F1K_9Sw4gmyGMuKi-LNxPZOrjTS1DQBFUY2Atfswi9ZnWIIflpqe7BrjgffMPm6Pgmk7WQPJKAktDEyh-tUv6xtfvhRV8hISB_qjRNk2kmGWuvbpWZnQH7jJKPYd3c7dIaW38kMtTaaaJ4Vlx_0Ej55I2JYyLgTlAvSoV9WBHzjEubiGO6ECAtgnQGqMS-2ks15s7WcOtW9ZjejyO1djV2I4U0VdL0nQ21oPRNvfWue0sT2tZOKjG9s5RglVGmdRfcR8tVsTSRcTCCH9HKkHn04uaVzILlY7DYtleDhqrlQ08texz6pRlO8a-QtSr6JsmsCwnjtmoXQ3-ctjHeYLOZXXzPfgqXEUyLXQjse23Hhm0m0kdiqD1t7lgvke7HTC36BdlkdDTEHO9AlPV9B1MQxUe-sgsA51Dt7vCYj67zzqfESqhqyPWyQeXD-h3XM4wDdGWJECjMGYNroHE_wu9b11GHlsjpCyXn973jjxLcFMyfbJyRLTXyHRuaIcukpZ_4zXp1Q0sR8ihbNl-f05wZkE', // MailerLite API key configured
            groupId: 'pass-bola-newsletter' // Default group name for Passa Bola subscribers
        };

        // 🔄 Alternative free APIs (no key required)
        this.freeAPIs = {
            // Free football data
            footballData: 'https://api.football-data.org/v4',
            
            // Free news (limited)
            newsData: 'https://newsdata.io/api/1/news',
            
            // JSONPlaceholder for testing
            jsonPlaceholder: 'https://jsonplaceholder.typicode.com'
        };
    }

    // 🔑 Method to check if API keys are configured
    isConfigured() {
        return {
            newsAPI: this.newsAPI.apiKey !== 'YOUR_NEWSAPI_KEY',
            mailerLite: this.mailerLite.apiKey !== 'YOUR_MAILERLITE_API_KEY'
        };
    }

    // 📋 Get setup instructions
    getSetupInstructions() {
        return {
            newsAPI: {
                url: 'https://newsapi.org',
                description: 'Cadastre-se gratuitamente para obter notícias de futebol em tempo real',
                status: '✅ Configurado',
                steps: [
                    '1. Acesse https://newsapi.org',
                    '2. Clique em "Get API Key"',
                    '3. Crie sua conta gratuita',
                    '4. Copie sua API Key',
                    '5. Substitua YOUR_NEWSAPI_KEY no arquivo api-config.js'
                ]
            },
            mailerLite: {
                url: 'https://www.mailerlite.com',
                description: 'Plataforma gratuita para newsletter com até 1000 assinantes',
                status: '✅ Configurado',
                steps: [
                    '1. Acesse https://www.mailerlite.com',
                    '2. Crie uma conta gratuita',
                    '3. Vá em Integrations > API',
                    '4. Gere uma API Key',
                    '5. Crie um grupo para assinantes',
                    '6. Substitua os valores no arquivo api-config.js'
                ]
            }
        };
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APIConfig;
} else if (typeof window !== 'undefined') {
    window.APIConfig = APIConfig;
}
