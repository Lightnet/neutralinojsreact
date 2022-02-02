# neutralinojs react 

# status:
- Testing...

# Packages:
 * express
 * react

# software:
 * nodejs
 * neutralino

# Information:
  Lightweight application from neutralino to run browser client. For server using nodejs. Since nodejs is need for easy build on server side for application for game, editor, database and other module set up.

 https://neutralino.js.org/docs/api/os

```js
let info = await Neutralino.os.execCommand('python --version');
console.log(`Your Python version: ${info.stdOut}`);

await Neutralino.os.execCommand('npm start', { background: true });
```

Neutralino has build in library.

But were using both. One for admin and other is users. By using React components to make some simple UI and layout for easy access.

# Guide:
  Install nodejs.

  Install npm packages.
```
npm i -g @neutralinojs/neu
npm install
```

  https://neutralino.js.org/docs/cli/neu-cli/

  Run the command to build current binary.
  
```
neu update
```

  Run the application.

```
neu run
```

  dev hot reload (not working...)
  
```
neu run --frontend-lib-dev
```

  server and browser client
```
npm run devp
```

https://neutralino.js.org/docs/cli/neu-cli

# Layout:
- .babelrc (compile for bundle.js)
- resources (browser client)
- src (client and server)
- neutralino.config.json (browser config)
- package.json (node js)
- webpack.config.js ( for react.js and bebel.js)

# Config:
(wip)
```
"cli": {
  "clientLibrary": "/resources/js/neutralino.js",
}
```


## Bugs:
  - Neutralino.os.execCommand()
    - If not code correctly. The browser client can't be close.
  - hot reload socket for neutralino.js commication to browser app not found correct way to access api

# Links:
- https://neutralino.js.org/docs/how-to/use-a-frontend-library

# Ref:
 - https://www.youtube.com/watch?v=4WAur8r7Jhk&list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj&index=3
 - https://github.com/neutralinojs/neutralinojs-minimal
 - https://stackoverflow.com/questions/69945819/how-to-set-up-node-server-on-neutralino
 - https://www.youtube.com/watch?v=6OcAoXr40oE
 - https://medium.com/neutralinojs/simple-browser-terminal-with-neutralinojs-90705e85a3
 - https://neutralino.js.org/docs/how-to/use-a-frontend-library
 - https://github.com/sudhakar3697/electron-alternatives
