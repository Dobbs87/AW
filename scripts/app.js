var http = require('http');
var express = require('express');
var nodemailer = require("nodemailer");

var body-parser = require('body-parser');
var app = express();
var port Number(process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}))

//Front Page
