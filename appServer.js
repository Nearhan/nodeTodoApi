var express = require('express');
var util = require('util');
var fs = require('fs');

var app = express();
var router = require('./routes')();

app.use('/', router);
app.listen(8000);