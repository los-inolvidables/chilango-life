var mysql = require('mysql');


var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "holacode",
 database: "chilango"
});
var selectAll = function(cb) {
 con.query('SELECT * FROM comments', (err, results, fields)=> {
   if(err) {
     cb(err, null);
   } else {
     cb(null, results);
   }
 });
};
var insertOne = function(description, cb) {
 con.query('INSERT INTO comments (description) VALUES (?)',
   [description], (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       console.log(results);
       cb(null, results);
     }
   });
};
module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
