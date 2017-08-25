/*
*   Server configuration
*/




const path = require('path');

const config = {
    port: process.env.PORT || 8888,
    path: {
        root: path.resolve( __dirname, '../' ),
        build: path.resolve( __dirname, '../build' ),
    },
    mongo: {
        uri: 'mongodb://localhost/eatstreet',
    },
};

module.exports = config;