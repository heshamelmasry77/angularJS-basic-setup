var consolidate = require('consolidate');
var path = require('path');
var express = require('express');
module.exports = function (app, config) {
  //var everyauth = require('./modules/Auth/everyauth')(config);

  app.configure(function () {
      app.set('port', process.env.PORT || 3000);
      app.set('views', __dirname + '/public/dist');
      app.engine('twig', consolidate.twig);
      app.set('view engine', "twig");
      app.use(require('prerender-node').set('prerenderToken', 'iA9fhOXOVofCnTxqvIhU').set('protocol', 'https'));
      app.use(express.logger('dev'));
      app.use(express.bodyParser());
      app.use(express.methodOverride());
      app.use(express.cookieParser('azure zomg'));
      app.use(express.session());
      // app.use(everyauth.middleware(app));
      app.use(app.router);
      app.use(express.static(path.join(__dirname, 'public/dist')));
      app.use(function(req, res, next){
          res.status(404);

          if (req.accepts('html')) {
              res.render('index', {
                  meta: {},
                  IS_DEBUG: process.env.IS_DEBUG
              });
              return;
          }

          // respond with json
          if (req.accepts('json')) {
              res.send({ error: 'Not found' });
              return;
          }

          // default to plain-text. send()
          res.type('txt').send('Not found');
      });
  });

  app.configure('development', function () {
      app.use(express.errorHandler());
  });
}
