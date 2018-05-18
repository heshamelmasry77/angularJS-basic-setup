var MobileDetect = require('mobile-detect');

module.exports = function (app, config) {
    var CatalogCtrl = new (require('./CatalogCtrl'))(config);

    app.get('/', function (req, res) {
        res.render('index', {
            meta: {},
            IS_DEBUG: process.env.IS_DEBUG
        });
    });
    app.get('/oops', function (req, res) {
        res.render('index', {
            meta: {},
            IS_DEBUG: process.env.IS_DEBUG
        });
    });
    app.get('/404', function (req, res) {
        res.render('index', {
            meta: {},
            IS_DEBUG: process.env.IS_DEBUG
        });
    });
};
