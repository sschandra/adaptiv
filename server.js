//Dependencies
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    //mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/restTest');

// Express
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set("view options", {layout: false});
app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.render('index.html');
});
// Routes
app.use('/api',require('./routes/api'));

// Start server
app.listen('3000');
console.log('API running on port 3000');