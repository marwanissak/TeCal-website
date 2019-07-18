"use strict";
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
var Schema = mongoose.Schema;
var userDataSchema = new Schema({
    title: { type: String, required: true },
    pass: Number,
    points: Number
}, { collection: 'user-data' });
exports.UserData = mongoose.model('UserData', userDataSchema);
/* GET home page. */
function load_student_info(req, res, next) {
    res.render('layout');
}
exports.load_student_info = load_student_info;
;
function get_data(req, res, next) {
    exports.UserData.find()
        .then(function (doc) {
        res.render('layout', { items: doc });
    });
}
exports.get_data = get_data;
;
function insert(req, res, next) {
    var item = {
        title: req.body.title,
        pass: req.body.pass,
        points: req.body.points
    };
    var data = new exports.UserData(item);
    data.save();
    res.redirect('/users/get-data');
}
exports.insert = insert;
;
function update(req, res, next) {
    var title = req.body.title;
    exports.UserData.findOne({ title: title }, function (err, doc) {
        if (err) {
            console.error('error, no entry found');
        }
        doc.pass = req.body.pass;
        doc.points = req.body.points;
        doc.save();
    });
    res.redirect('/users/get-data');
}
exports.update = update;
;
function Delete(req, res, next) {
    //var id = req.body.id;
    //UserData.findByIdAndRemove(id).exec();
    var id = req.body.id;
    exports.UserData.findOne({ title: id }, function (err, user) {
        user.remove();
    });
    res.redirect('/users/get-data');
}
exports.Delete = Delete;
;
//Show table
function Show_student_table(req, res) {
    exports.UserData.find({}, function (err, docs) {
        if (err)
            res.json(err);
        else
            res.render('index', { mongoose: docs });
    });
}
exports.Show_student_table = Show_student_table;
;
//add point to player
function add_point_to_player(req, res, next) {
    var title = req.body.title;
    var pass = req.body.pass;
    var point;
    exports.UserData.findOne({ title: title, pass: pass }, function (err, doc) {
        if (err) {
            console.error('error, no entry found');
        }
        if (req.body.points == 1) {
            doc.points = doc.points + 1;
            doc.save();
        }
        if (req.body.points == 2) {
            doc.points = doc.points + 2;
            doc.save();
        }
    });
    res.redirect('/game');
}
exports.add_point_to_player = add_point_to_player;
;
//test funktioner
function game_jade(req, res) {
    exports.UserData.find({}, function (err, docs) {
        if (err)
            res.json(err);
        else
            res.render('contact', { mongoose: docs });
    });
}
exports.game_jade = game_jade;
;
//# sourceMappingURL=Teacher.js.map