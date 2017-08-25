/*
*   Server configuration
*/




var config = {
    port: process.env.PORT || 8888,
    mongo: {
        uri: 'mongodb://localhost/eatstreet',
    },
};

module.exports = config;