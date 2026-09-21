# PRD: Chat Offline

## 1. Visao geral

O Chat Offline sera uma aplicacao de pagina unica para simular uma conversa entre duas personas: **Usuario** e **Robo**. A pessoa podera enviar mensagens manualmente por qualquer uma das personas usando um toggle no campo de entrada. Quando uma mensagem for enviada como Usuario, o Robo devera gerar uma resposta automatica localmente, sem backend, persistencia ou dependencia de internet.

O projeto ja possui Vite, React, TypeScript e Tailwind configurados.

## 2. Objetivo

Criar uma experiencia simples e responsiva de chat que permita:

- visualizar um historico de mensagens em uma unica janela;
- enviar mensagens como Usuario ou Robo;
- receber respostas automaticas do Robo quando o Usuario enviar uma mensagem;
- distinguir visualmente as duas personas;
- manter o historico apenas durante a sessao atual.

## 3. Escopo do MVP

### Incluido

- Interface de chat em pagina unica.
- Historico armazenado em state React, sem persistencia.
- Mensagens do Usuario alinhadas a direita.
- Mensagens do Robo alinhadas a esquerda.
- Identificacao visual por nome/avatar e cores diferentes.
- Toggle para alternar entre Usuario e Robo.
- Campo de texto com altura ajustavel conforme o conteudo.
- Envio por botao e pela tecla `Enter`.
- Quebra de linha com `Shift + Enter`.
- Botao de envio desabilitado quando a mensagem estiver vazia ou contiver apenas espacos.
- Resposta automatica local do Robo apos uma mensagem enviada como Usuario.
- Indicador temporario de que o Robo esta respondendo.
- Rolagem automatica para a mensagem mais recente.
- Estado vazio com mensagem inicial orientando o primeiro envio.
- Layout responsivo para desktop, tablet e mobile.

### Fora do escopo

- Login, cadastro ou multiplos usuarios.
- Backend, banco de dados ou sincronizacao entre dispositivos.
- Persistencia em `localStorage`, cookies ou IndexedDB.
- Integracao com APIs externas ou modelos de IA.
- Anexos, emojis, audio, imagens ou formatacao rica.
- Edicao, exclusao ou reenvio de mensagens.
- Multiplas salas ou conversas.

## 4. Premissas da resposta automatica

Como o produto deve funcionar offline, o Robo usara um gerador local simples e deterministico no MVP:

- a resposta sera criada no proprio navegador a partir do texto recebido;
- o gerador podera usar regras ou respostas predefinidas para reconhecer casos basicos, como saudacoes e perguntas comuns;
- para mensagens sem correspondencia, sera usada uma resposta padrao contextual;
- a resposta aparecera apos um pequeno atraso simulado para representar processamento;
- durante esse atraso, novas mensagens do Usuario deverao continuar sendo tratadas sem quebrar o historico;
- a logica devera ficar isolada em um modulo proprio para permitir futura substituicao por uma API ou modelo de IA.

## 5. Requisitos funcionais

### RF01. Exibir estado inicial

Ao abrir a aplicacao sem mensagens, o chat deve exibir um estado vazio com uma mensagem de boas-vindas ou orientacao para iniciar a conversa.

### RF02. Alternar persona

O input deve possuir um unico toggle que alterne entre os estados `Usuario` e `Robo`.

- O estado inicial deve ser `Usuario`.
- O estado ativo deve ser claramente identificavel.
- Quando `Robo` estiver ativo, o card do input deve receber uma borda roxa.
- O toggle deve ter nome acessivel e funcionar por teclado.

### RF03. Enviar mensagem

O usuario deve conseguir enviar uma mensagem pelo botao de envio ou pressionando `Enter`.

- `Shift + Enter` deve inserir quebra de linha sem enviar.
- Mensagens vazias ou compostas apenas por espacos nao podem ser enviadas.
- A mensagem enviada deve ser adicionada ao historico com persona, texto e identificador.
- Depois do envio, o campo deve ser limpo e voltar ao estado adequado para uma nova mensagem.

### RF04. Diferenciar mensagens

Mensagens do Usuario devem ficar alinhadas a direita e mensagens do Robo a esquerda. Cada bolha deve exibir identificacao visual suficiente, incluindo nome ou avatar, alem de cores distintas.

### RF05. Gerar resposta automatica

Quando uma mensagem for enviada como Usuario, o sistema deve adicionar uma resposta automatica do Robo usando o gerador local definido no MVP.

- A resposta deve ser adicionada como uma nova mensagem do Robo.
- O estado de processamento deve ser exibido enquanto a resposta nao estiver pronta.
- Uma mensagem enviada manualmente como Robo nao deve disparar outra resposta automatica.

### RF06. Manter o historico em memoria

O historico deve existir somente em state React durante a sessao. Ao recarregar a pagina, a conversa deve ser reiniciada.

### RF07. Rolar para a mensagem mais recente

Quando uma nova mensagem ou resposta for adicionada, o historico deve rolar suavemente ate o final, sem ocultar a mensagem mais recente atras do campo de entrada.

## 6. Requisitos visuais e de responsividade

- O fundo geral deve ser cinza claro.
- O conteudo do chat deve ter largura maxima equivalente a `max-w-2xl` e ficar centralizado em telas maiores.
- O historico deve ocupar o espaco disponivel entre o topo e o composer.
- O card do input deve ficar fixado visualmente na parte inferior da janela do chat.
- O card do input deve ter fundo branco, cantos discretamente arredondados e altura ajustavel ao texto.
- O card deve usar borda roxa quando o modo Robo estiver ativo.
- O botao de envio deve ficar no lado direito do card.
- O toggle deve ficar no lado esquerdo do card.
- Em telas pequenas, controles e mensagens devem caber sem overflow horizontal.
- O campo de texto deve preservar quebras de linha e permitir textos maiores sem alterar a largura da pagina.
- Contraste, foco visivel e tamanhos de toque devem ser adequados para acessibilidade.

## 7. Modelo de dados

Todos os tipos devem ser declarados com `type`, dentro de `src/types`.

```ts
type ChatRole = 'user' | 'bot'

type ChatMessage = {
  id: string
  role: ChatRole
  content: string
  createdAt: number
}
```

A implementacao pode adicionar tipos para o estado do toggle, gerador de respostas e status de processamento, desde que eles tambem fiquem em `src/types`.

## 8. Organizacao esperada

- `src/types`: tipos compartilhados da aplicacao.
- `src/components`: componentes visuais do chat.
- Modulo proprio para a geracao local de respostas automaticas.
- `App` responsavel por coordenar estado, envio e composicao da tela.

A organizacao exata de subpastas fica livre, desde que preserve essas responsabilidades e os padroes ja existentes no projeto.

## 9. Criterios de aceite

1. A aplicacao inicia exibindo o estado vazio e sem mensagens persistidas.
2. O toggle alterna entre Usuario e Robo e indica visualmente o modo atual.
3. Mensagens do Usuario aparecem a direita e mensagens do Robo a esquerda, com identificacao visual distinta.
4. O botao de envio permanece desabilitado para input vazio ou somente com espacos.
5. `Enter` envia a mensagem e `Shift + Enter` insere uma quebra de linha.
6. Uma mensagem enviada como Usuario produz uma resposta automatica local do Robo.
7. Uma mensagem enviada manualmente como Robo nao produz uma resposta adicional automatica.
8. O indicador de processamento aparece durante a geracao da resposta.
9. O historico rola para a mensagem mais recente.
10. O composer permanece acessivel na parte inferior e nao cobre o ultimo item do historico.
11. O layout funciona sem overflow horizontal em telas mobile.
12. Recarregar a pagina remove o historico da conversa.
13. Os controles principais podem ser operados por teclado e possuem estados de foco perceptiveis.

## 10. Plano de implementacao

As tarefas abaixo devem ser executadas na ordem indicada, mantendo cada etapa pequena e verificavel.

### Fase 1: Fundacao

1. **Inspecionar a estrutura atual**
   - Confirmar entrypoint, estilos globais, configuracao do Tailwind e scripts disponiveis.
   - Identificar e preservar os padroes ja existentes no projeto.
   - [x] Configuracao atual confirmada: Vite, React, TypeScript e Tailwind via plugin.

2. **Definir os tipos do dominio**
   - Criar os tipos de persona, mensagem e status do Robo em `src/types`.
   - Definir a forma minima do historico e dos identificadores.
   - [x] Tipos criados em `src/types/chat.ts`.

3. **Criar a funcao de respostas locais**
   - Implementar o gerador deterministico em um modulo isolado.
   - Incluir saudacoes, perguntas simples e fallback.
   - Manter a funcao sem chamadas de rede e facil de substituir futuramente.
   - [x] Gerador criado em `src/services/generateBotResponse.ts`, sem chamadas de rede.

### Fase 2: Estrutura da interface

4. **Montar o layout principal**
   - Criar o container de pagina com fundo cinza claro.
   - Aplicar centralizacao e largura maxima `2xl`.
   - Separar visualmente area do historico e area do composer.
   - [x] Layout principal criado com container responsivo, historico e composer inferior.

5. **Implementar o estado vazio**
   - Exibir a mensagem inicial quando o historico estiver vazio.
   - Garantir que a composicao nao quebre em telas pequenas.
   - [x] Estado vazio criado em `src/components/EmptyState.tsx`.

6. **Criar a apresentacao das mensagens**
   - Criar componentes para lista, item e bolha de mensagem.
   - Aplicar alinhamento, nome/avatar e variacoes visuais para Usuario e Robo.
   - Preservar quebras de linha do conteudo.
   - [x] Lista e bolha criadas em `src/components/MessageList.tsx` e `src/components/MessageBubble.tsx`.

7. **Criar o composer**
   - Adicionar textarea com altura ajustavel.
   - Adicionar o toggle de persona no lado esquerdo.
   - Adicionar o botao de envio no lado direito.
   - Implementar estado de foco e borda roxa no modo Robo.
   - [x] Composer criado em `src/components/ChatComposer.tsx` com toggle, textarea e estados visuais.

### Fase 3: Interacoes

8. **Implementar envio manual**
   - Validar texto vazio ou apenas espacos.
   - Adicionar mensagens ao state.
   - Limpar e redimensionar o textarea depois do envio.
   - Implementar `Enter` para envio e `Shift + Enter` para quebra de linha.
   - [x] Envio manual conectado ao historico em state, com validacao e limpeza do campo.

9. **Implementar respostas automaticas**
   - Disparar o gerador somente para mensagens enviadas como Usuario.
   - Exibir estado de processamento.
   - Adicionar a resposta do Robo ao historico depois do atraso simulado.
   - Garantir que respostas e mensagens mantenham ordem e identificadores unicos.
   - [x] Respostas locais implementadas com atraso simulado e contador de respostas pendentes.

10. **Implementar rolagem automatica**
    - Observar novas mensagens e o estado de processamento.
    - Rolar ate o fim sem esconder o ultimo item sob o composer.
   - [x] Rolagem automatica implementada para novas mensagens e estado de processamento.

### Fase 4: Qualidade e acabamento

11. **Ajustar responsividade**
    - Testar desktop, tablet e mobile.
    - Corrigir overflow, espacamentos, alturas e area de toque.

12. **Revisar acessibilidade**
    - Adicionar labels acessiveis e estados `aria` quando necessario.
    - Validar navegacao por teclado, foco visivel e semantica dos botoes.

13. **Validar criterios de aceite**
    - Executar lint, build e testes disponiveis.
    - Fazer verificacao manual dos fluxos de envio como Usuario e Robo.
    - Conferir que o reload limpa o historico e que nenhuma requisicao de rede e necessaria.

## 11. Definicao de pronto

O MVP estara pronto quando todos os criterios de aceite forem atendidos, o fluxo principal funcionar em desktop e mobile, o projeto passar pelos scripts de validacao existentes e a resposta automatica puder ser executada sem internet ou backend.
