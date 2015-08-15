# bitmex-swagger

[![NPM Package](https://img.shields.io/npm/v/bitmex-swagger.svg?style=flat-square)](https://www.npmjs.org/package/bitmex-swagger)
[![Dev Dependencies](https://img.shields.io/david/thofmann/bitmex-swagger.svg?style=flat-square)](https://www.npmjs.org/package/bitmex-swagger)

An unofficial node.js wrapper for the BitMEX Bitcoin derivatives exchange Swagger API

Official BitMEX website: [https://www.bitmex.com](https://www.bitmex.com)

## Getting Started

Installation:

```
npm install bitmex-swagger --save
```

Usage:

```javascript
var Swagger = require('bitmex-swagger');

Swagger(function(swagger) {

    swagger.chat.get({count: 1, reverse: true}, function(response) {
        var message = JSON.parse(response.data)[0];
        console.log('Here is the most recent chat message:');
        console.log(message.user + ': ' + message.message);
    });

});
```
