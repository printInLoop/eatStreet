var bodyParser = require( 'body-parser' );
var express = require( 'express' );

var app = express();

app.use(bodyParser.json());