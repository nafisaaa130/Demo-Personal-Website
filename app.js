const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

var profileController = require('./routes/profile');
app.use(profileController);

var port = 3000;

app.listen(port);
console.log("Listening on Port:", port);