# 📡 Documentação de APIs - Passa Bola

Documentação dos endpoints e integrações do projeto **Passa Bola**.

---

## 📰 NewsAPI - Notícias

**URL:** `https://newsapi.org/v2/everything`  
**Auth:** `X-Api-Key: 41b8e7f7382e420e90584ceb96542157`

**Parâmetros:**
- `q`: Termo de busca (obrigatório)
- `language`: `pt` 
- `sortBy`: `publishedAt`
- `pageSize`: `10`

**Queries:** `"futebol feminino Brasil"`, `"women football Brazil"`, `"Campeonato Brasileiro Feminino"`


---

## 📧 MailerLite - Newsletter

**URL:** `https://connect.mailerlite.com/api/subscribers`  
**Method:** `POST`  
**Auth:** `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...`

**Body:**
```json
{
    "email": "usuario@exemplo.com",
    "name": "Nome do Usuário", 
    "groups": ["pass-bola-newsletter"],
    "status": "active"
}
```

---

## 🔄 RSS Feeds - Backup

Feeds RSS utilizados como fallback:

1. **GloboEsporte:** `https://rss2json.com/api.json?rss_url=https://ge.globo.com/futebol/futebol-feminino/rss.xml`
2. **Lance:** `https://rss2json.com/api.json?rss_url=https://www.lance.com.br/futebol-feminino/feed`

---

## 💾 LocalStorage - Fallback

**Chaves utilizadas:**
- `newsletter-subscribers`: Array de emails/nomes/datas
- `contact-messages`: Array de mensagens de contato  
- `passa-bola-cart`: Array de produtos no carrinho
- Cache de notícias: Map() em memória (5 min)

---

## 📊 Estrutura de Dados

### News Article (Padronizada)
```javascript
{
    id: number,
    title: string,
    excerpt: string,
    image: string,
    date: string,
    category: string,
    url: string,
    source: string,
    filter?: string
}
```

### Product (Loja)
```javascript
{
    id: number,
    name: string,
    price: number,
    image: string,
    category: string,
    description: string,
    sizes: string[]
}
```

### API Response Wrapper
```javascript
{
    success: boolean,
    message: string,
    data?: any
}
```

---

## ⚠️ Fallback Strategy
```
NewsAPI → RSS Feeds → Dados Hardcoded
MailerLite → LocalStorage
```

## 📈 Performance
- **Cache:** 5 minutos em memória
- **Limits:** NewsAPI (1000/day), MailerLite (1000 users)

---

**📝 Última atualização:** Setembro 2025 
**🔄 Versão:** 1.0  
**👥 Autores:** Arthur Canaverde da Cruz, Lucas Costa Zago
