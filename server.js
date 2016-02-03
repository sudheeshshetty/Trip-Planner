var http = require('http');
var mongoose =require('mongoose');
var qs = require('querystring');
var express=require('express');
var bodyParser = require('body-parser');
var url = require('url');
var app=express();

mongoose.connect('mongodb://localhost/bank');
var Schema = mongoose.Schema({
	_id:Number,
	fullname:String,
	sex:String,
	dob:String,
	creationDate:String,
	email:String,
	mobile:Number,
	balance:Number,
});


var accounts = mongoose.model('accounts',Schema);

app.get('/verify', function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Method","'GET, POST, OPTIONS, PUT, PATCH, DELETE'");
	app.get('/username',function(req,res){
		var url_parts = url.parse(req.url, true);
		var username = url_parts.query.username;
		accounts.find({'username':username},function(err,docs){
			if(err){ res.send("Exists"); }
			else { .send("Continue"); }
		});
	});
	app.get('/email',function(req,res){
		var url_parts = url.parse(req.url, true);
		var email = url_parts.query.email;
		accounts.find({'email':email},function(err,docs){
			if(err){ res.send("Exists"); }
			else { .send("Continue"); }
		});
	});
	app.get('/mobile',function(req,res){
		var url_parts = url.parse(req.url, true);
		var mobile = url_parts.query.mobile;
		accounts.find({'mobile':mobile},function(err,docs){
			if(err){ res.send("Exists"); }
			else { .send("Continue"); }
		});
	});
});