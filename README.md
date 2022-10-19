# Typescript - Início

- Iniciar projeto node e instalar typescript como dev

```
npm init
npm i -D typescript
```

- Iniciar projeto typescript

```
npx tsc --init
```

- Config básica no tsconfig

```json
"rootDir": "./src",
"sourceMap": true,
"outDir": "./dist"
```

- Transpilação

```
npx tsc                           // Transpilação "nativa"
node arquivo_transpilado.js
/*******************************************/
npm i -D sucrase
npx sucrase-node src/index.ts     // Transpila e executa
npx sucrase .\src\ -d .\dist\ --transforms typescript,imports   //Transpila
/*******************************************/
npm i -D ts-node-dev            // Mais proximo ao nodemon
npx ts-node-dev --respawn --transpile-only --ignore-watch node_modules .\src\index.ts
```

- Debug
  Menu -> Run and Debug -> Create a launch json -> adicionar o prelaunchtask

```json
"preLaunchTask": "tsc build -tsconfig.json",
```

- Estrutura de pastas
<pre>
  src
  │ app.js # Classe app
  │ server.js # Server para iniciar o app
  └───api  
   └───controllers # Funções da controllers do express route
   └───models # Modelos do banco de dados
   └───services # Regras de negócio
   └───subscribers # Eventos async
   └───repositories\* # Query builders
  └───config # Configuração das variaveis de ambiente
  └───jobs # Tarefas de rotinas
  └───loaders # Modulos para utilizado no app
  └───utils # Trechos de código pequeno
  └───helpers # Trechos de arquitetura de código
  └───routes # Definição de rotas express
  └───types # Tipagem (d.ts) para Typescript
</pre>
