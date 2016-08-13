// MY MAIN APP JS

var express = require('./config/express');
var app = express();

app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
