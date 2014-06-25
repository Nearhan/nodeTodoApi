exports = _router;

var fs = require('fs');
var util = require('util');
var express = require('express');

var _router = express.Router();

_router.get('/', function (req, res, next) {

    var fullPath = util.format('%s/index.html', __dirname);
    fs.readFile(fullPath, function (err, file) {
        if (err) {
            res.writeHead(404);
            return res.end();
        }
        res.writeHead(200);
        return res.end(file.toString());
    })
});

_router.get('/about', function (req, res, next) {

    var fullPath = util.format('%s/about.html', __dirname);
    fs.readFile(fullPath, function (err, file) {
        if (err) {
            res.writeHead(404);
            return res.end();
        }
        res.writeHead(200);
        return res.end(file.toString());
    })
});

