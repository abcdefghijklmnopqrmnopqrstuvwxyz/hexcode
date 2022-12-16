const timer = document.getElementById("time");
const hex = document.getElementById("code");

let hexcode;
let hour;
let minute;
let second;

setInterval(callFunctions, 1000);

function callFunctions()
{
    getTime();
    writeTimeHex();
    changeBackground();
}

function getTime()
{
    let time = new Date();
    time.getHours() >= 10 ? hour = time.getHours() : hour = "0" + time.getHours();
    time.getMinutes() >= 10 ? minute = time.getMinutes() : minute = "0" + time.getMinutes();
    time.getSeconds() >= 10 ? second = time.getSeconds() : second = "0" + time.getSeconds();
    hexcode = "#" + hour + minute + second;
}

function writeTimeHex()
{
    timer.innerHTML = hour + ":" + minute + ":" + second;
    hex.innerHTML = hexcode;
}

function changeBackground()
{
    document.body.style.backgroundColor = hexcode;
}