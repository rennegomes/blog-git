# 📖 Blog com GitHub Issues  

[![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js)](https://nextjs.org/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)  

Este projeto é um **blog dinâmico** criado com **Next.js 13 (App Router)**, **React**, **TypeScript** e **TailwindCSS**, onde os posts são gerenciados diretamente pelas **Issues do GitHub**.  
Simples, prático e totalmente integrado com a API do GitHub! 🚀  

---

## ✨ Funcionalidades

- 🔗 Integração com a **API do GitHub**  
- 📝 Cada **Issue** se torna automaticamente um **post** do blog  
- 📌 Renderização do conteúdo em **Markdown** com suporte a **GFM** (tabelas, checklists, links, etc.)  
- 👤 Exibição de informações do **perfil do autor** via API  
- 🔙 Botão de **voltar página** utilizando `useRouter()`  
- 🎨 Interface moderna com **TailwindCSS**  
- ⚡ Geração de páginas estáticas com **Next.js App Router**

---

## 🛠️ Tecnologias

- [Next.js 13](https://nextjs.org/)  
- [React](https://react.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [Phosphor Icons](https://phosphoricons.com/)  
- [React Markdown](https://github.com/remarkjs/react-markdown) + [Remark GFM](https://github.com/remarkjs/remark-gfm)  
- [GitHub REST API](https://docs.github.com/pt/rest)

---

## 🚀 Como rodar o projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/blog-posts.git
cd blog-posts
```

---

### 2️⃣ Instalar dependências

```bash
npm install
# ou
yarn install
```

---

### 3️⃣ Configurar variáveis de ambiente

```bash
GITHUB_TOKEN=seu_token_aqui
GITHUB_USERNAME=seu_usuario
GITHUB_REPO=blog-posts
```

---

### 4️⃣ Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

---

## 📂 Estrutura do Projeto

```bash
src/
 ├─ app/
 │   ├─ components/     # Componentes reutilizáveis (Perfil, Card, Pesquisa, ButtonBack)
 │   ├─ posts/[number]  # Página dinâmica para cada post
 │   └─ page.tsx        # Página inicial
 ├─ lib/
 │   └─ github.ts       # Integração com a API do GitHub
 └─ styles/             # Estilos globais
```