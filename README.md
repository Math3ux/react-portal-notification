# React Portal Notification

Este projeto é um exemplo de como criar uma notificação que utilize o React Portal para renderizar o componente fora do componente pai.

## Tecnologias utilizadas

- React
- Vite
- TypeScript
- ESLint
- Prettier

## Como executar o projeto

1. Clone o repositório
2. Instale as dependências com `npm install` ou `yarn install`
3. Execute o projeto com `npm run dev` ou `yarn dev`
4. Abra o navegador em `http://localhost:3000`

## Como funciona

O projeto utiliza o React Portal para renderizar o componente `Notification` fora do componente pai. Isso permite que o componente seja renderizado em uma posição fixa na tela, sem interferir com o layout do componente pai.

O componente `Notification` é renderizado com o portal utilizando o hook `useRef` para criar um elemento DOM que servirá como container para o portal. Em seguida, o componente `Notification` é renderizado com o portal utilizando a função `ReactDOM.createPortal`.

## Arquitetura do projeto

O projeto segue a seguinte arquitetura:

- `src/Components/Notification.tsx`: Componente responsável por renderizar a notificação
- `src/App.tsx`: Componente pai que renderiza o componente `Notification`
- `src/main.tsx`: Arquivo principal do projeto que renderiza o componente `App`
- `vite.config.ts`: Arquivo de configuração do Vite
- `tsconfig.json`: Arquivo de configuração do TypeScript
- `tsconfig.app.json`: Arquivo de configuração do TypeScript para o app
- `tsconfig.node.json`: Arquivo de configuração do TypeScript para o servidor
- `package.json`: Arquivo de configuração do npm
- `README.md`: Arquivo de documentação do projeto
