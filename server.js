/**/




const bodyParser = require( 'body-parser' );
const express = require( 'express' );

global.app = express();
app.config = require( './config/server.config' );
app.use( bodyParser.json() );

app.use( '/build', express.static( `${ __dirname }/build` ) );

app.get( '/', ( req, res ) => {
    res.sendfile( 'app/views/index.html' );
});

app.listen( app.config.port );