const sqlite3 = require('sqlite3').verbose();

exports.open = function(){
    return new sqlite3.Database('./database/org.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to the database.');
      });
}
exports.close = function(db){
    db.close((err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Close the database connection.');
      });
}