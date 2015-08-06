var express=require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Content-Disposition");
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {
	console.log(req);
	console.log("file name", req.files.profileImage.name);                                           
    console.log("file path", req.files.profileImage.path);
  res.send('Got a POST request');
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});