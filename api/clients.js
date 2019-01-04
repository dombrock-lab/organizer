exports.list = function(db){
    return new Promise(function(resolve,reject){
        db.all('SELECT * FROM clients', [], (err, rows) => {
            if (err) {
              throw err;
            }
            resolve(rows);
        });
    });
}

exports.getBy = function(db,type,value){
    console.log("new request for getby");
    console.log("type: "+type);
    console.log("value: "+value);
    return new Promise(function(resolve,reject){
        if(type == 'id'){
            var sql = 'SELECT * FROM clients WHERE '+type+' = '+value;
        }else{
            value = decodeURIComponent(value);
            console.log("decoded value: "+value);
            var sql = 'SELECT * FROM clients WHERE '+type+' = "'+value+'"';
        }
        db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            resolve(rows);
        });
    });
}

exports.deleteBy = function(db,type,value){
    console.log("new request for deleteby");
    console.log("type: "+type);
    console.log("value: "+value);
    return new Promise(function(resolve,reject){
        if(type == 'id'){
            var sql = 'DELETE FROM clients WHERE '+type+' = '+value;
        }else{
            value = decodeURIComponent(value);
            console.log("decoded value: "+value);
            var sql = 'DELETE FROM clients WHERE '+type+' = "'+value+'"';
        }
        db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            resolve(rows);
        });
    });
}