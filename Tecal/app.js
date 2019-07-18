"use strict";
var express = require("express");
var routes = require("./routes/index");
var http = require("http");
var path = require("path");
var teacher = require("./routes/Teacher");
//var hej = new teacher.test.teacher("dima", 55)
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
var stylus = require("stylus");
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/', routes.Onrequest);
app.get('/cont', teacher.game_jade);
app.get('/home', routes.Onrequest);
app.get('/student', routes.Student);
app.get('/teacher', routes.Teacher);
app.get('/result', routes.Result);
app.get('/game', routes.game);
app.get('/Quiz', routes.Quiz);
app.get('/users', teacher.load_student_info);
app.get('/users/get-data', teacher.load_student_info);
app.post('/users/insert', teacher.insert);
app.post('/users/update', teacher.update);
app.post('/users/delete', teacher.Delete);
app.post('/users/add_point', teacher.add_point_to_player);
//good table show
app.get('/users-good', teacher.Show_student_table);
//test functions
//app.get('/get-data', teacher.get_data);
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
//hej.show_student_result(4);
//hello
//# sourceMappingURL=app.js.map