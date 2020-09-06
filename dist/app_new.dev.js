"use strict";

var path = require('path');

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.listen(3000);