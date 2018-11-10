'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const ejs = require('ejs')
// var routes = require('./routes/index');
// var users = require('./routes/users');
const index = require('./routes/index')
var app = express();

//var database = require('./database/User');

//app.get('/save', function (req, res) {
//    var post = { from: 'me', to: 'you', msg: 'hi' };
//    db.query('INSERT INTO messages SET ?', post, function (err, result) {
//        if (err) throw err;
//    });
//});

//server.listen(3000);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

app.use(index)
app.listen(3000, () => {
    console.log(`Server up and running on port 3000`)
})





exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
        if (error) {
            // console.log("error ocurred",error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            // console.log('The solution is: ', results);
            if (results.length > 0) {
                if (results[0].password == password) {
                    res.send({
                        "code": 200,
                        "success": "login sucessfull"
                    });
                }
                else {
                    res.send({
                        "code": 204,
                        "success": "Email and password does not match"
                    });
                }
            }
            else {
                res.send({
                    "code": 204,
                    "success": "Email does not exits"
                });
            }
        }
    });
}

exports.register = function (req, res) {
    // console.log("req",req.body);
    var today = new Date();
    var users = {
        "name": req.body.Name1,
        "email": req.body.Emails,
        "password": req.body.Password,
        "phone": req.body.Phone,
        "income": req.body.Income,
        "address": req.body.Address

    }
    connection.query('INSERT INTO user SET ?', users, function (error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }
    });
}


