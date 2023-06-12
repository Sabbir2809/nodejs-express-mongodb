# Backend: Node.js Express.js MongoDB

## [Chapter-1: Introduction to Node, NPM, Package.json](https://github.com/Sabbir2809/nodejs-express-mongodb/tree/chapter-1)

- **Node JS** installation from official site nodejs.org - use only LTS versions
- Use **terminal / command prompt** to check installation :
  `node -v`
  `npm -v`
  `nodemon -v`
- **VS Code** installation directly from code.visualstudio.com site
- Use VS code terminal to run **commands**
- **Node REPL** interface can be used directly by typing `node` in **terminal / command prompt** . Use **Ctrl+D** to exit interface. Use **CTRL+C** to exit terminal
- Running any JavaScript file from node using `node filename.js`
- **Modules** are basic containers in Node/JavaScript system. 1 file can be one module in Javascript.
- Two type of Module Systems in node JS are - **CommonJS** module and **ES** Modules.

**1. CommonJS Module:**

```javascript
//lib.js
exports.sum = function () {};

//index.js
const module = require('./lib.js');
module.sum();
```

**2. ES Module:**

```javascript
//lib.js
export { sum };

//index.js
import { sum } from './lib.js';
```

- FileSystem Module(fs) is one of core modules of Node JS. **fs** can be used to read/write any file. There are many more core modules in NodeJS which you can check in NodeJS API docs.
- Reading files can be **Synchronous** or **Asynchronous**. **Async** is most preferred method in NodeJS. As there is **NO blocking of I/O in NodeJS**

- Node project can be initialized with `npm init` command which also creates `package.json` file
- **package.json** is a configuration file for node projects which has **scripts**, **dependencies**, **devDependencies** etc
- `npm install <package-name>` is used to install any online modules available for node on NPM repository online.
- `nodemon` is a package for running node server and track live changes to re-start again.
- `scripts` inside **package.json** can be used like `npm run <script-name>` e.g `npm run dev`. Only for `npm start` you can avoid `run`.
- use `npm install -g <package.json>` to install packages globally on your system. Not just in the project but useful all over your system.
- Node versions are formatted like **4.1.9** where these are `major.minor.patch` versions.
- you can install all dependencies again using `npm install` again
- **package-lock.json** has exact versions installed and link of dependencies of each package.
- use `npm update` to update packages safely. `npm outdated` shows outdated and latets versions of packages installed in your **package.json**
- use `npm uninstall <package-name>` to uninstall packages from `package.json`
- `node_modules` should not be shared - you can make `.gitignore`to ignore them to be uploaded.

### JavaScript Asynchronous

1. [Callbacks](https://www.w3schools.com/js/js_callback.asp)
1. [Asynchronous]()
1. [Promises](https://www.w3schools.com/js/js_promise.asp)
1. [Async Await](https://www.w3schools.com/js/js_async.asp)
