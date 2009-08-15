/*
* Copyright Neville Burnell
* All Rights Reserved
*
*/
var Json = require('json');
var Version = require('cloudwork/core/version');

var Rack = exports;

Rack.Http200 = function(env) {
    return [200, {}, {}];
}

Rack.Http404 = function(env) {
    return [404, {}, {}];
}

Rack.BodyToJson = function(app) {
    return function(env) {
        var result = app(env);  // result[] = [status, headers, body]
        result[1] = {'Content-Type':'application/json'};
        result[2] = [Json.encode(result[2])];
        return result;
    }
}

Rack.Version = function(app) {
    return function(env) {
        var result = app(env);
        result[2]['cloudwork.core.version'] = Version.Version;
        result[2]['cloudwork.core.build'] = Version.Build;
        return result;
    }
}