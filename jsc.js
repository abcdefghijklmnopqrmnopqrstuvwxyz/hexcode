const timer = document.getElementById("time");
const hex = document.getElementById("code");

setInterval(callFunctions, 1000);

function callFunctions()
{
    writeTime();
    showHex();
    changeBackground();
}

function writeTime()
{
    let time = new Date();
    time.getHours() >= 10 ? timer.innerHTML = time.getHours() : timer.innerHTML = "0" + time.getHours();
    time.getMinutes() >= 10 ? timer.innerHTML += ":" + time.getMinutes() : timer.innerHTML += ":0" + time.getMinutes();
    time.getSeconds() >= 10 ? timer.innerHTML += ":" + time.getSeconds() : timer.innerHTML += ":0" + time.getSeconds();
}

function showHex()
{
    let time = new Date();
    time.getHours() >= 10 ? hex.innerHTML = "#" + time.getHours() : hex.innerHTML = "#0" + time.getHours();
    time.getMinutes() >= 10 ? hex.innerHTML += time.getMinutes() : hex.innerHTML += "0" + time.getMinutes();
    time.getSeconds() >= 10 ? hex.innerHTML += time.getSeconds() : hex.innerHTML += "0" + time.getSeconds();
}

function changeBackground()
{
    let hexcode = "#";

    let time = new Date();
    time.getHours() >= 10 ? hexcode += time.getHours() : hexcode +=  time.getHours();
    time.getMinutes() >= 10 ? hexcode += time.getMinutes() : hexcode += "0" + time.getMinutes();
    time.getSeconds() >= 10 ? hexcode += time.getSeconds() : hexcode += "0" + time.getSeconds();
    
    document.body.style.backgroundColor = hexcode;
}