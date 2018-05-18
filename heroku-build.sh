cp ./public/src/app/config/config.js.$(echo $CARZAR_ENV) ./public/src/app/config/config.js
echo "GOING TO install gulp"
npm install gulp
echo "GOING TO install bower"
npm install bower
echo "GOING TO npm install"
npm install
echo "GOING TO bower install"
bower install
echo "GOING TO gulp build"
# gulp build
