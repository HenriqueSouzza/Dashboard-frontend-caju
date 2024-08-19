# About project

```
* Vite + React
* Typescript
* Jest
* Cypress
* Json-server
* Storybook
```

# Requirements

- Node 20

# Setup

Instale as dependências:

```bash
yarn install
```

Inicie o projeto:

```bash
yarn dev
```

Verifique se seu .env.development está com esses parâmetros:

```bash
VITE_HOST_API=http://localhost:3000
```

Inicie o api mockada:

```bash
yarn init:db
```

Certifique-se se o link está funcionando:

```bash
http://localhost:3000 (api)
http://localhost:3001 (projeto)
```

Para rodar os testes unitários e integração, execute o comando:

```bash
yarn test:dev
```

Para rodar os testes e2e, execute o comando:

```bash
yarn ci:open (abre interface)
yarn ci:run (somente bash)
```

Para rodar o storybook, execute o comando:

```bash
yarn storybook
```

e acesse o link 

```bash
http://localhost:6006/
```
