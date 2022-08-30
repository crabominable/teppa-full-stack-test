## Aplicação para o teste full stack da Teppa!

### Backend:

TypeScript como linguagem, Express para o gerenciamento de rotas e middlewares do backend, Joi para validações e o FireStore da Google como banco.

### Frontend:

React no frontend com Axios para o gerenciamento das requisições, lib e hook do formik para facilitar a criação de formulário controlado, Joi para validações e Redux para o estado global.

### CI/CD, Deploy e integração:

Deploy do backend feito no heroku com docker, utilizando a stack container. Testes de integração do backend rodando com integração contínua no Github Actions. Frontend no firebase hosting.(Não realizado pelos problemas citados abaixo)

### Alguns problemas:

A implementação do FireStore como banco de dados ocorreu tudo certo, mas o deploy no docker eu não consegui fazer porque os buildpacks que eu tentei para gerar não funcionaram, e não consegui executar outra possível solução. E o deploy no cloud run do GCP falta a conta de faturamento que não consigo criar por um erro.

-------------------------------------

### Backend:

TypeScript as a language, Express for managing routes and backend middleware, Joi for validations and Google's FireStore as a database.

### Frontend:

React on the frontend with Axios for managing requests, Joi for validations and Redux for the global state.

### CI/CD, Deploy and integration:

Deployment of the backend made in heroku with docker, using the stack container. Backend integration tests running with continuous integration on Github Actions.

### Some troubles:

The FireStore implementation as a database all went well, but the deploy in docker I couldn't do because the buildpacks I tried to generate didn't work, and I couldn't run another possible solution. And the GCP cloud run deploy is missing the billing account that I can't create due to an error.

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

- Create the .env file(like in .env.example)

- Start the aplication:

```bash
cd frontend
npm run dev
cd ..
cd backend
npm run dev
```
