var MobileDetect = require('mobile-detect');

module.exports = function (app, config) {

    var ProfileCtrl = new (require('./ProfileCtrl'))(config);

    app.get('/profile', function (req, res) {
        var md = new MobileDetect(req.headers['user-agent']);
        res.render('index', {
            meta: {},
            is_mobile: !!md.mobile(),
            IS_DEBUG: process.env.IS_DEBUG

        });
    });


}
