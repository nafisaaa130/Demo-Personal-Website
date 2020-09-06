"use strict";

var path = require('path');

var express = require('express');

var bodyParser = require('body-parser'); //const { JSDOM } = require( "jsdom" );
//const { window } = new JSDOM( "" );
//const $ = require( "jquery" )( window );


var app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"](path.join(__dirname, 'public')));

var profileController = require('./routes/profile');

app.use(profileController);
app.listen(3000);