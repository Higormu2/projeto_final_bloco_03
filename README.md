# farmaciaGO 💊

Frontend de um sistema de e-commerce (Farmácia) desenvolvido em React, consumindo uma API REST própria (backend Spring Boot). Projeto final do Bloco 03, construído a partir da base do Blog Pessoal.

## 🚀 Sobre o projeto

Aqui você encontra Medicamentos e Cosméticos! O objetivo do projeto é implementar o frontend completo de um sistema de comércio eletrônico de farmácia, consumindo o CRUD dos recursos **Categoria** e **Produto** de uma API já existente.

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [React Spinners](https://www.davidhu.io/react-spinners/)

## ⚙️ Funcionalidades

- **Home** — página inicial de apresentação, com Navbar e Footer
- **Categoria**
  - Listagem de categorias (`GET`)
  - Cadastro de nova categoria (`POST`)
  - Edição de categoria existente (`PUT`)
  - Exclusão de categoria (`DELETE`)
- **Produto**
  - Cadastro, listagem, edição e exclusão de produtos
- Rotas configuradas com React Router DOM (`/`, `/home`, `/categorias`, `/cadastrarcategoria`, `/editarcategoria/:id`, entre outras)

## 🔗 Backend

Este frontend consome a API REST da Farmácia, hospedada no Render:

```
https://farmacia-jk1x.onrender.com
```

> O backend não possui autenticação/Security configurada, portanto não é necessário enviar token nas requisições.

## 🌳 Organização das branches

O desenvolvimento foi dividido em etapas, cada uma em uma branch própria:

| Branch | Descrição |
|---|---|
| `01_Componente_Home_navbar_footer` | Estrutura inicial, estilização com Tailwind, componentes Home, Navbar e Footer |
| `02_Rotas` | Configuração das rotas da aplicação com React Router DOM |
| `03_CRUD_Categoria` | Consumo do backend — CRUD completo do recurso Categoria |
| `04_Extras` *(opcional)* | Funcionalidades extras (ex: CRUD de Produto, imagens, etc.) |

## 💻 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/Higormu2/projeto_final_bloco_03.git

# Acesse a pasta do projeto
cd projeto_final_bloco_03

# Instale as dependências
npm install

# Rode a aplicação
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 📸 Prints

> Adicione aqui os prints da estilização dos componentes.

## 👤 Autor

Desenvolvido por **Higor** — [GitHub](https://github.com/Higormu2)
