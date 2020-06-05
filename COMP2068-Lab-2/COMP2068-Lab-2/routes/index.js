'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    var answer= "";

    function calculate(method, x, y) {

        var number1 = parseInt(x);
        var number2 = parseInt(y);

        if (method === "add") {
            answer = "Addition: " + x + " + " + y + " = " + (number1 + number2);
            console.log(answer);
        }
        else if (method === "subtract") {
            answer = "Subtraction: " + x + " - " + y + " = " + (number1 - number2);
            console.log(answer);
        }
        else if (method === "multiply") {
            answer = "Multiplication: " + x + " * " + y + " = " + (number1 * number2);
            console.log(answer);
        }
        else if (method === "divide") {
            answer = "Division: " + x + " / " + y + " = " + (number1 / number2);
            console.log(answer);
        }
        else {
            answer = "Error";
            console.log(answer);
        }
    }
        if (Object.keys(req.query).length > 0) {
            calculate(req.query.method, req.query.x, req.query.y);
   }

    
    
    res.render('index', { title: 'Operations in JavaScript', calculate: answer });
});


module.exports = router;
