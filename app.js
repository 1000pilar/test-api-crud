const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const Promise = require('bluebird')



var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/api-crud-mongoose');

var books = require('./routes/books')
var transactions = require('./routes/transactions')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
