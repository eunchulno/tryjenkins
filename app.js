/**
 * Created by T on 2017-05-22.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Logging
app.use(function(req, res, next) {
    console.log('request : ' + req.method + ' url : ' + req.url);
    next();
});
app.get('/',(req,res)=>{
  res.send(hello("hi"));
})

// 여기까지 오면 - 에러 상황
app.use(function(req, res, next) {
    res.sendStatus(404);
});

app.listen(3000, function() {
    console.log('server is listening 3000');
});

function hello(message){
  return messsage;
}
