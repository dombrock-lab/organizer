//generic db util functions
exports.list = function(db,table){
    return new Promise(function(resolve,reject){
        let sql = 'SELECT * FROM '+table;
        db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            resolve(rows);
        });
    });
}
exports.getBy = function(db,table,type,value){
    console.log("new request for getby");
    console.log("table: "+table);
    console.log("type: "+type);
    console.log("value: "+value);
    return new Promise(function(resolve,reject){
        if(type == 'id'){
            var sql = 'SELECT * FROM '+table+' WHERE '+type+' = '+value;
        }else{
            value = decodeURIComponent(value);
            console.log("decoded value: "+value);
            var sql = 'SELECT * FROM '+table+' WHERE '+type+' = "'+value+'"';
        }
        db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            resolve(rows);
        });
    });
}
exports.deleteBy = function(db,table,type,value){
    console.log("new request for deleteby");
    console.log("table: "+table);
    console.log("type: "+type);
    console.log("value: "+value);
    return new Promise(function(resolve,reject){
        if(type == 'id'){
            var sql = 'DELETE FROM '+table+' WHERE '+type+' = '+value;
        }else{
            value = decodeURIComponent(value);
            console.log("decoded value: "+value);
            var sql = 'DELETE FROM '+table+' WHERE '+type+' = "'+value+'"';
        }
        db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            resolve(rows);
        });
    });
}