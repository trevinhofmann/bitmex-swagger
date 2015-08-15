'use strict';

var client = require('swagger-client');
var Q = require('q');

module.exports = function(params) {
    var deferred = Q.defer();
    var swagger = new client({
        url: 'https://www.bitmex.com/api/explorer/resources',
        success: function() {
            deferred.resolve(swagger);
        }
    });
    return deferred.promise;
};
