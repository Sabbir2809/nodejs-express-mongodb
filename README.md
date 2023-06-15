## [Chapter-8: React Integration and MERN Stack Live deployment](https://github.com/Sabbir2809/nodejs-express-mongodb)

**Sending data from front-end to Server**

1. Fetch : it is in-built API in the browser
2. Axios : we will use **axios** as it is easier to use.

   **CORS Issues :**

CORS - [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is a standard that allows a server to relax the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

- we will use CORS package to allow cross origin request from **React JS** server to **NodeJS** server as they are on different hosts.
- `npm install cors`
- to use cors -

```javascript
const cors = require('cors');

server.use(cors());
```

**HTML Forms**

- `name` attribute on input elements is used to send data keys which are validated with schema in backend.

### Build a React Project :

- Run `npm run build`
- use `build` folder to be hosted on public hosting/static hosting

### Host a React Project :

you can use `build` folder of react and add it to static hosting of express.
`server.use(express.static('build'));`

### Use Routing in Front-end

use wildcard in express route to point to React single page applications (index.html)

```javascript
res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
```

`__dirname` is a variable
