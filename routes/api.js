//Dependencies
var express = require('express');
var router = express.Router();


// Models
//var Product = require('../models/product');
//var Recepie = require('../models/recepie');

// Routes

router.get('/men',function(req,res){
    res.json({
		"template":"<div class='col-lg-5 content-tile-large'><img ng-src='{{rootDirectory}}{{content.src}}'/><h2>{{content.name}}</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p><p><a class='btn btn-primary' href='#' role='button'>View details &raquo;</a></p></div>",
        "docs":[
			{"name":"Heading1","src":"men.jpeg","price":12.7},
			{"name":"Heading2","src":"men.jpeg","price":15.7},
			{"name":"Heading3","src":"men.jpeg","price":11.7},
            {"name":"Heading3","src":"men.jpeg","price":11.7}
			]
		});
});

router.get('/women',function(req,res){
    res.json({
		"template":"<div class='col-lg-2 content-tile-small '><img ng-src='{{rootDirectory}}{{content.src}}'/><h2>{{content.name}}</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p><p><a class='btn btn-primary' href='#' role='button'>View details &raquo;</a></p></div>",
        "docs":[
			{"name":"Heading 1","src":"women.jpeg","price":12.7},
			{"name":"Heading 2","src":"women.jpeg","price":15.7},
			{"name":"Heading 3","src":"women.jpeg","price":19.7},
            {"name":"Heading 4","src":"women.jpeg","price":13.7},
            {"name":"Heading 5","src":"women.jpeg","price":20.7}
			]
		});
});

router.get('/music',function(req,res){
    res.json({
		"template":"<div class='col-lg-12 content-tile-list'><img ng-src='{{rootDirectory}}{{content.src}}'/><h2>{{content.name}}</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p><p><a class='btn btn-primary' href='#' role='button'>View details &raquo;</a></p></div>",
        "docs":[
			{"name":"Heading1","src":"music.jpeg","price":12.7},
			{"name":"Heading2","src":"music.jpeg","price":15.7},
			{"name":"Heading3","src":"music.jpeg","price":11.7}
			]
		});
});
router.get('/image',function(req,res){
    res.json({
		"template":"<div class='col-lg-12 content-tile-list'><img ng-src='{{rootDirectory}}{{content.src}}'/><h2>{{content.name}}</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p><p><a class='btn btn-primary' href='#' role='button'>View details &raquo;</a></p></div>",
        "docs":[
			{"name":"Image01","src":"temp-photo.jpg","title":"Image description 01"},
			{"name":"Image02","src":"temp-photo.jpg","title":"Image description 01"},
			{"name":"Image03","src":"temp-photo.jpg","title":"Image description 01"}
			]
		});
});
/*
Product.methods(['get','put','post','delete']);
Product.register(router,'/products');

Recepie.methods(['get','put','post','delete']);
Recepie.register(router,'/recepies');
*/
// Retrun router
module.exports = router;
