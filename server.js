var app = require('express')();
var config = require('nconf');

config.env().file({ file: 'settings.json' });

require('./config')(app, config);
require('./modules/Catalog/routes.js')(app, config);
require('./modules/Profile/routes.js')(app, config);

var server = require('http').createServer(app);

server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
