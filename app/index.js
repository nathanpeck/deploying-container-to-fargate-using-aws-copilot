var getRawBody = require("raw-body");
var runes = require('runes');
var http = require("http");

var server = http.createServer(function (req, res) {
  getRawBody(req)
    .then(function (buf) {
      res.statusCode = 200;
      let stringRunes = runes(buf.toString());
      res.end(stringRunes.reverse().join(""));
    })
    .catch(function (err) {
      res.statusCode = 500;
      res.end(err.message);
    })
});

server.listen(3000);

process.once('SIGTERM', function () {
  server.close();
  process.exit();
});

// Test
