import $ from "jquery";
import randomColor from 'randomcolor';
import {sayHelloNicely} from './say-hello';
$(document).ready(function () {
    // const $ = require('jquery');
    // const randomColor = require('randomcolor');

    // set random colors
    var bgColor = randomColor();
    var txtColor = randomColor();
    $("body").css('background-color', bgColor);
    $("h1").css('color', txtColor);

    // reversed color and add text
    $("div").css({
        'background-color': txtColor,
        'color': bgColor
    });

    // log message for the npm exercise
    const sayHello = name => `Hello ${name}!`;
    console.log(sayHello("Laura"));

    // add text for the Modules exercise
    $("span").html(`<h3>${sayHelloNicely()}</h3>`);

    // add a button to reload the page
    $("button").click(function() {
        location.reload();
    });

});
