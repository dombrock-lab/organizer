const express = require('express');
const router = express.Router();
const clients = require('../api/clients.js');
const database = require('../api/util/database.js');

const util = require('./util/route_util.js');

router.get('/list/', function(req, res){
    let db = database.open();
    let results = clients.list(db);
    results.then(function(data){
        res.send(data);
        database.close(db);
    });
});

//list client by id
router.get('/id/*', function(req, res){
    let db = database.open();
    let value = util.pathVal(req);
    let results = clients.getBy(db,"id",value);
    results.then(function(data){
        res.send(data);
        database.close(db);
    });
});

//list client by name
router.get('/name/*', function(req, res){
    let db = database.open();
    let value = util.pathVal(req);
    let results = clients.getBy(db,"name",value);
    results.then(function(data){
        res.send(data);
        database.close(db);
    });
});

//delete client by id
router.get('/delete/id/*', function(req, res){
    let db = database.open();
    let value = util.pathVal(req);
    let results = clients.deleteBy(db,"id",value);
    results.then(function(data){
        res.send(data);
        database.close(db);
    });
});

//delete client by name
router.get('delete/name/*', function(req, res){
    let db = database.open();
    let value = util.pathVal(req);
    let results = clients.deleteBy(db,"name",value);
    results.then(function(data){
        res.send(data);
        database.close(db);
    });
});
module.exports = router;