let wynik = document.getElementById("wynik")
let przycisk = document.getElementById("guzik")

let userFileField1 = document.getElementById("uf1");
let userFileField2 = document.getElementById("uf2");
let userSpeedField1 = document.getElementById("us1");
let userSpeedField2 = document.getElementById("us2");

function getFileSize() {
    let liczba = userFileField1.value;
    if (userFileField2.value == "kB") {return liczba*8}
    if (userFileField2.value == "mB") {return liczba*8*1024}
    if (userFileField2.value == "gB") {return liczba*8*1024*1024}
    console.log("tu1")
    return 0;
}

function getFileSpeed() {
    let liczba = userSpeedField1.value;
    if (userSpeedField2.value == "kb") {return liczba}
    if (userSpeedField2.value == "mb") {return liczba*1024}
    if (userSpeedField2.value == "gb") {return liczba*1024*1024}
    if (userSpeedField2.value == "kB") {return liczba*8}
    if (userSpeedField2.value == "mB") {return liczba*8*1024}
    if (userSpeedField2.value == "gB") {return liczba*8*1024*1024}
    return 0;

}

function getTimeInS() {
    size = getFileSize();
    console.log("size "+ size)
    speed = getFileSpeed();
    console.log("speed"+ speed)
    wynik.innerHTML = (size/speed + " s")
}

przycisk.onclick = function() {getTimeInS()}