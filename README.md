## Aplicação para o teste full stack da Teppa!

Aplicação fullstack em TypeScript como linguagem, Express para o gerenciamento de rotas e middlewares do backend, FireStore como banco, React no frontend com Axios para o gerenciamento das requisições e Redux para o estado global.

Funcionando em um mono-repo, bastando apenas configurar o arquivo .env (a pasta backend possui um arquivo de exemplo), rodar o docker-compose para subir ambas as aplicações em containers (frontend e backend).

-------------------------------------

Fullstack application in TypeScript as a language, Express for managing routes and middleware on the backend, FireStore as a database, React on the frontend with Axios for managing requests and Redux for the global state.

Working in a mono-repo, just configure the .env file (the backend folder has an example file), run docker-compose to upload both applications in containers (frontend and backend).

## Prerequisites

- Node

## Tech stack

- Typescript
- Express
- React
- React Router
- Axios
- Redux

## Getting started

- Clone the repository:

```bash
git clone https://github.com/crabominable/teppa-full-stack-test
```

- Go to repository root:

```bash
cd teppa-full-stack-test
```

- Install the dependencies:

```bash
cd frontend
npm i
cd ..
cd backend
npm i
```

- Start the aplication:

```bash
cd frontend
npm run dev
cd ..
cd backend
npm run dev
```
