//ROUTING BOILERPLATE
const express = require('express');
const router = express.Router();
const db_u = require('../control/db_util.js');//database utility module
const database = require('../control/database.js');
const route_u = require('./util/route_util.js');//router utility module

const table = 'clients';

function route(req,res,endpoint){
    let db = database.open();
    let value = route_u.pathVal(req);//final part of the URL
    let results = custom_routing(endpoint,value,db);    
    results.then(function(data){
        res.send(data);
        database.close(db);
    });
}

//customise this routing
function custom_routing(endpoint,value,db){
    switch(endpoint){
        case 'list':
            var results = db_u.list(db,table);
            break;
        case 'id':
            var results = db_u.getBy(db,table,"id",value);
            break;
        case 'name':
            var results = db_u.getBy(db,table,"name",value);
            break;
        case 'delete/id':
            var results = db_u.deleteBy(db,table,"id",value);
            break;
        case 'delete/name':
            var results = db_u.deleteBy(db,table,"name",value);
            break;
        default:
            var results = db_u.list(db,table);
    }
    return results;
}
router.get('/list/', function(req, res){
    route(req,res,'list');
});
router.get('/id/*', function(req, res){
    route(req,res,'id');
});
router.get('/name/*', function(req, res){
    route(req,res,'name');
});
router.get('/delete/id/*', function(req, res){
    route(req,res,'delete/id');
});
router.get('delete/name/*', function(req, res){
    route(req,res,'delete/name');
});

module.exports = router;