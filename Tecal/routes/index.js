"use strict";
var fs = require("fs");
//databas info
var mongoose = require('mongoose');
//mongoose.connect('mongodb://Marwan:1234@ds153657.mlab.com:53657/tecal_db');
function index(req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
}
exports.index = index;
;
function about(req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
}
exports.about = about;
;
function contact(req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
}
exports.contact = contact;
;
function Onrequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Mainpage.html").pipe(res);
    //res.end('Error 404 :Page not found\n');
}
exports.Onrequest = Onrequest;
function Student(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Student.html").pipe(res);
    //res.end('Error 404 :Page not found\n');
}
exports.Student = Student;
function Teacher(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Teacher.html").pipe(res);
    //res.end('Error 404 :Page not found\n');
}
exports.Teacher = Teacher;
function Result(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Result.html").pipe(res);
    //res.end('Error 404 :Page not found\n');
}
exports.Result = Result;
function game(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Game.html").pipe(res);
    //res.end('Error 404 :Page not found\n');
}
exports.game = game;
function Quiz(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Quiz.html").pipe(res);
    //res.end('Error 404 :Page not found\n');
}
exports.Quiz = Quiz;
function Page_not_found(res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Error 404 :Page not found\n');
}
//# sourceMappingURL=index.js.map