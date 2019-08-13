var http = require('http');

var app = require('./app');
require('./global');

module.exports = app;

//var server = http.createServer(app).listen(2019);
var server = http.createServer(app).listen(process.env.PORT);

console.log(`Server running at ${$arr.html.rootpath}`);
