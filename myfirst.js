var http = require('http');
var url = require('url');
var fs = require('fs');
var helper = require('./helpers');
http.createServer(function (req, res) {

  var q = url.parse(req.url, true).query;

  if (!helper.isObjectEmpty(q)) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(convertCurrency(q.euro, q.rate))
    return res.end();

  } else {
    fs.readFile('index2.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }



}).listen(8080);

function convertCurrency(euro, currencyAmount) {
  return (euro * currencyAmount).toString();
}