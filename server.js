var fs = require('fs')
var http = require('http')
var mime = require('mime-types')

http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.setHeader("Content-type", mime.lookup(req.url));
    res.writeHead(200);
    res.end(data);
  });
}).listen(5000);