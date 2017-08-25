/**/




const bodyParser = require( 'body-parser' );
const express = require( 'express' );

//
global.app = express();

// Get server configuration
app.config = require( '../config/server.config' );

app.use( bodyParser.json() );

// Build directory
// Serve static assets from this directory.
app.use( '/build', express.static( `${ __dirname }/build` ) );

app.get( '/', ( req, res ) => {
    res.sendfile( 'app/template/index.html' );
});

app.listen( app.config.port, () => {
    console.log( `Server running at localhost:${ app.config.port }` );
});