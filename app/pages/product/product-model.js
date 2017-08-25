var db = require( '../database' );

var Product = db.model( 'Product', {
    name: { type: String, required: true },
    description: { type: String }
});

module.exports = Product;