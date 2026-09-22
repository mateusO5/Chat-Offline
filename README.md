# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Chat Offline

  Aplicacao de chat em pagina unica feita com React, TypeScript, Vite e Tailwind CSS. O projeto simula uma conversa entre duas personas: Usuario e Robo.

  ## Funcionalidades

  - Envio de mensagens como Usuario ou Robo por meio de um toggle.
  - Mensagens do Usuario alinhadas a direita e mensagens do Robo a esquerda.
  - Respostas automaticas locais do Robo para mensagens enviadas como Usuario.
  - Indicador de que o Robo esta respondendo.
  - Historico mantido somente em memoria durante a sessao.
  - Envio pelo botao ou pela tecla `Enter`.
  - Quebra de linha com `Shift + Enter`.
  - Campo de mensagem com altura ajustavel.
  - Rolagem automatica para a mensagem mais recente.
  - Layout responsivo para desktop e dispositivos moveis.
  - Botoes visuais de anexo e camera, ainda sem funcionalidade.

  ## Tecnologias

  - React 19
  - TypeScript
  - Vite
  - Tailwind CSS 4
  - ESLint

  ## Como executar

  Instale as dependencias:

  ```bash
  npm install
  ```

  Inicie o servidor de desenvolvimento:

  ```bash
  npm run dev
  ```

  Depois, abra a URL exibida pelo Vite no terminal.

  ## Scripts

  | Comando | Descricao |
  | --- | --- |
  | `npm run dev` | Inicia o servidor de desenvolvimento com HMR. |
  | `npm run build` | Verifica os tipos e gera o build de producao. |
  | `npm run lint` | Executa o ESLint. |
  | `npm run preview` | Serve localmente o build de producao. |

  ## Estrutura principal

  ```text
  src/
    components/                 Componentes visuais do chat
      ChatComposer.tsx          Campo de mensagem e controles
      EmptyState.tsx            Estado inicial sem mensagens
      MessageBubble.tsx         Bolha individual de mensagem
      MessageList.tsx           Lista do historico
    services/
      generateBotResponse.ts    Gerador local de respostas
    types/
      chat.ts                   Tipos das mensagens e personas
    App.tsx                     Estado e composicao principal
    index.css                   Estilos globais
  ```

  ## Comportamento offline

  As respostas do Robo sao geradas no navegador por regras simples e deterministicas. A aplicacao nao usa backend, API externa ou banco de dados.

  O historico e perdido ao recarregar a pagina. Os controles de anexo e camera estao presentes apenas na interface e nao realizam upload ou captura neste momento.

  ## Validacao

  Antes de finalizar alteracoes, execute:

  ```bash
  npm run lint
  npm run build
  ```

  O plano detalhado de implementacao e os criterios de aceite estao em [`.docs/prd.md`](.docs/prd.md).
