$(document).ready(function () {

    const $ = require('jquery');
    const randomColor = require('randomcolor');

    var bgColor = randomColor();
    var txtColor = randomColor();
    $("body").css('background-color', bgColor);
    $("h1").css('color', txtColor);
    // reversed colors
    $("div").css({
        'background-color': txtColor,
        'color': bgColor
    });

    const sayHello = name => `Hello ${name}!`;

    console.log(sayHello("Laura"));

});
