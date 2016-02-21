'use strict';

// setup ========================
var express = require('express');
var app = express.createServer();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//SET USER AND PASSWORD!
var user = "";
var pass = "";



// configuration ==================
app.use(express.static('./app'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


mongoose.connect('mongodb://' + user + ':' + pass + '@ds054128.mongolab.com:54128/main_data');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Succesfully connected to mongolab');
});



// Schema settings ================================
var Apartments = mongoose.model('Apartment', {
    "address": {
        "description": String,
        "street": String,
        //"buildingnum": Number,
        "city": String
    },
    "floornum": Number,
    "roomsNum": Number,
    "size": Number,
    "renov": String,
    "renovYear": Number,
    "other": String,
    'doc_updated': Date,
    'doc_created': {
        type: Date,
        default: Date.now
    }
});


// writing to mongo example ================================
app.post('/api/newapt', function(req, res) {
    var item = new Apartments({
        'address': {
            'description': req.body.address['description'],
            'street': req.body.address['terms'][0].value,
            'city': req.body.address['terms'][1].value
        },
        "floornum": req.body.floornum,
        "roomsNum": req.body.roomsNum,
        "size": req.body.size,
        "renov": req.body.renov,
        "renovYear": req.body.renovYear,
        "other": req.body.other
    });
    item.save(function(err) {
        if (err) {
            res.status(500).json({
                error: "save failed",
                err: err
            });
            return;
        } else {
            res.status(201).json(item);
        };
    })
});


// run server ================================
var server = app.listen(5000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);

});
