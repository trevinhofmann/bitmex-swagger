# bitmex-swagger

[![NPM Package](https://img.shields.io/npm/v/bitmex-swagger.svg?style=flat-square)](https://www.npmjs.org/package/bitmex-swagger)

A node.js wrapper for the BitMEX Bitcoin derivatives exchange Swagger API

## Getting Started

Installation:

```
npm install bitmex-swagger --save
```

Usage:

```javascript
var swagger = require('bitmex-swagger');

swagger(function(api) {

    api.chat.get({count: 1, reverse: true}, function(response) {
        var message = JSON.parse(response.data)[0];
        console.log('Here is the most recent chat message:');
        console.log(message.user + ': ' + message.message);
    });

});
```
