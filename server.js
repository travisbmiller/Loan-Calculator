var express = require('express');
var bodyParser = require('body-parser');
var app = express();



app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());


app.get('/interest_rate', function (req, res) {
  var rate = Math.floor(Math.random() * 2000 ) / 100;
  res.json({'rate': rate});

});

app.listen(9000);