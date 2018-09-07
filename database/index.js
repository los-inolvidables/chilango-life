var mysql = require('mysql');

var connection = mysql.createConnection({

  host : 'localhost',
  user : 'root',
  password : 'password',
  database : 'mike'

});

var selectAll = function(callback) {
  conection.query('SELECT * FROM forum' function(err,results,fields){
    if(err) {
      callback(err, null);
    }else{
      callback(null,results);
    }
  } );
};

module.exports.selectAll = selectAll;
