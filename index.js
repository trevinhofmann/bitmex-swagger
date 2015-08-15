'use strict';

var client = require('swagger-client');

module.exports = function(callback) {
    var swagger = new client({
        url: 'https://www.bitmex.com/api/explorer/resources',
        success: function() {
            callback(swagger);
        }
    });
};
