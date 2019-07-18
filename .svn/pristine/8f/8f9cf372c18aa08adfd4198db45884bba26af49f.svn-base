/*
 * GET home page.
 */
import express = require('express');
import fs = require('fs');

//databas info
var mongoose = require('mongoose');
//mongoose.connect('mongodb://Marwan:1234@ds153657.mlab.com:53657/tecal_db');


export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

export function about(req: express.Request, res: express.Response) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

export function contact(req: express.Request, res: express.Response) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

export function Onrequest(req: express.Request, res: express.Response) {
    
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream("./Mainpage.html").pipe(res);
        //res.end('Error 404 :Page not found\n');
 

}

export function Student(req: express.Request, res: express.Response) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Student.html").pipe(res);
    //res.end('Error 404 :Page not found\n');


}

export function Teacher(req: express.Request, res: express.Response) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Teacher.html").pipe(res);
    //res.end('Error 404 :Page not found\n');


}

export function Result(req: express.Request, res: express.Response) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Result.html").pipe(res);
    //res.end('Error 404 :Page not found\n');


}

export function game(req: express.Request, res: express.Response) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Game.html").pipe(res);
    //res.end('Error 404 :Page not found\n');


}

export function Quiz(req: express.Request, res: express.Response) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream("./Quiz.html").pipe(res);
    //res.end('Error 404 :Page not found\n');


}














function Page_not_found(res: express.Response) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Error 404 :Page not found\n');
}