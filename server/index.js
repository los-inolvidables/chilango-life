var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('../database/index.js');

app.use(bodyParser.json());


app.use(express.static(__dirname + '/../client/dist'));

app.get('/forum', function(req, res){
  database.selectAll((err, results) => {
     if(err) {
       console.log('errrrrrrr hitting the database');
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})

app.post('/forum', function(req, res){

 let description = req.body.description;

 if(!description) {
   res.sendStatus(400);
 } else {
   database.insertOne(description,(err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
