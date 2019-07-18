import express = require('express');



//export namespace test
//{
//    export class teacher {
//        public ident: number;
//        public name: string;

//        constructor(name_: string, id_: number) {
//            this.ident = id_;
//            this.name = name_;


//        }

//        show_student_result(time: number) {

//            for (var i = 0; i < time; i++) {
//                console.log(this.name)
//                console.log(this.ident)
//            }
//            // show every students resultxs

//        }





//    }
//}

var mongoose = require('mongoose');

mongoose.connect('mongodb://Marwan:1234@ds153657.mlab.com:53657/tecal_db');

import fs = require('fs');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    title: { type: String, required: true },
    pass: Number,
    points: Number
}, { collection: 'user-data' });

export var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */


export function load_student_info(req, res, next) {


    res.render('layout');

};

export function get_data(req, res, next) {


    UserData.find()
        .then(function (doc) {
            res.render('layout', { items: doc });
        });
};

export function insert(req, res, next) {
    var item = {
        title: req.body.title,
        pass: req.body.pass,
        points: req.body.points
    };

    var data = new UserData(item);
    data.save();

    res.redirect('/users/get-data');
};

export function update(req, res, next) {
    var title = req.body.title;

    UserData.findOne({ title: title }, function (err, doc) {
        if (err) {
            console.error('error, no entry found');
        }
        
        doc.pass = req.body.pass;
        doc.points = req.body.points;
        doc.save();
    })
    res.redirect('/users/get-data');
};

export function Delete(req, res, next) {
    //var id = req.body.id;
    //UserData.findByIdAndRemove(id).exec();

    var id = req.body.id;

    UserData.findOne({ title: id }, function (err, user) {
        user.remove();
        })
    res.redirect('/users/get-data');
};

//Show table

export function Show_student_table(req, res) {
    UserData.find({}, function (err, docs) {

        if (err) res.json(err);
        else res.render('index', { mongoose: docs });
    });
};

//add point to player
export function add_point_to_player(req, res, next) {
    var title = req.body.title;
    var pass = req.body.pass;
    var point;
    UserData.findOne({ title: title, pass: pass }, function (err, doc) {
        if (err) {
            console.error('error, no entry found');
        }

        if (req.body.points == 1)
        {

            doc.points = doc.points + 1;
            doc.save();
        }
        if (req.body.points== 2) {

            doc.points = doc.points + 2;
            doc.save();
        }

    })
    res.redirect('/game');
};



//test funktioner

export function game_jade(req, res) {
    UserData.find({}, function (err, docs) {

        if (err) res.json(err);
        else res.render('contact', { mongoose: docs });
    });
};