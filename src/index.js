"use strict";
const $ = require('jquery');
const randomColor = require('randomcolor');

var bgColor = randomColor();
var txtColor = randomColor();
$("body").css('background-color', bgColor);
$("h1").css('color', txtColor);

function sayHello() {
    return "Hello!";
}
console.log(sayHello());