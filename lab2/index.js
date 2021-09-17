var kickSound;
var clapSound;
var boomSound;
var hihatSound;
var rideSound;
var openhatSound;
var snareSound;
var tinkSound;
var tomSound;
var channel1 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
var recChannel1 = false;
var recChannel2 = false;
var recChannel3 = false;
var recChannel4 = false;
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyPress);
    var btnPlayChannel1 = document.querySelector('#playChannel1');
    var btnPlayChannel2 = document.querySelector('#playChannel2');
    var btnPlayChannel3 = document.querySelector('#playChannel3');
    var btnPlayChannel4 = document.querySelector('#playChannel4');
    var btnRecChannel1 = document.querySelector('#recordChannel1');
    var btnRecChannel2 = document.querySelector('#recordChannel2');
    var btnRecChannel3 = document.querySelector('#recordChannel3');
    var btnRecChannel4 = document.querySelector('#recordChannel4');
    var a = document.querySelector('#a');
    var s = document.querySelector('#s');
    var d = document.querySelector('#d');
    var f = document.querySelector('#f');
    var g = document.querySelector('#g');
    var h = document.querySelector('#h');
    var j = document.querySelector('#j');
    var k = document.querySelector('#k');
    var l = document.querySelector('#l');
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    btnPlayChannel2.addEventListener('click', onPlayChannel2);
    btnPlayChannel3.addEventListener('click', onPlayChannel3);
    btnPlayChannel4.addEventListener('click', onPlayChannel4);
    btnRecChannel1.addEventListener('click', onRecChannel1);
    btnRecChannel2.addEventListener('click', onRecChannel2);
    btnRecChannel3.addEventListener('click', onRecChannel3);
    btnRecChannel4.addEventListener('click', onRecChannel4);
    a.addEventListener('click', function () { playSound("a"); });
    s.addEventListener('click', function () { playSound("s"); });
    d.addEventListener('click', function () { playSound("d"); });
    f.addEventListener('click', function () { playSound("f"); });
    g.addEventListener('click', function () { playSound("g"); });
    h.addEventListener('click', function () { playSound("h"); });
    j.addEventListener('click', function () { playSound("j"); });
    k.addEventListener('click', function () { playSound("k"); });
    l.addEventListener('click', function () { playSound("l"); });
    getAudioElements();
}
function onRecChannel1() {
    var btnRecChannel1 = document.querySelector('#recordChannel1');
    if (recChannel1 == false) {
        btnRecChannel1.innerText = "Stop recording 1";
        recChannel1 = true;
        channel1 = [];
    }
    else {
        btnRecChannel1.innerText = "Start recording 1";
        recChannel1 = false;
    }
}
function onRecChannel2() {
    var btnRecChannel2 = document.querySelector('#recordChannel2');
    if (recChannel2 == false) {
        btnRecChannel2.innerText = "Stop recording 2";
        recChannel2 = true;
        channel2 = [];
    }
    else {
        btnRecChannel2.innerText = "Start recording 2";
        recChannel2 = false;
    }
}
function onRecChannel3() {
    var btnRecChannel3 = document.querySelector('#recordChannel3');
    if (recChannel3 == false) {
        btnRecChannel3.innerText = "Stop recording 3";
        recChannel3 = true;
        channel3 = [];
    }
    else {
        btnRecChannel3.innerText = "Start recording 3";
        recChannel3 = false;
    }
}
function onRecChannel4() {
    var btnRecChannel4 = document.querySelector('#recordChannel4');
    if (recChannel4 == false) {
        btnRecChannel4.innerText = "Stop recording 4";
        recChannel4 = true;
        channel4 = [];
    }
    else {
        btnRecChannel4.innerText = "Start recording 4";
        recChannel4 = false;
    }
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onPlayChannel2() {
    channel2.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onPlayChannel3() {
    channel3.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onPlayChannel4() {
    channel4.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getAudioElements() {
    kickSound = document.querySelector('[data-sound="kick"]');
    clapSound = document.querySelector('[data-sound="clap"]');
    boomSound = document.querySelector('[data-sound="boom"]');
    hihatSound = document.querySelector('[data-sound="hihat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
}
function onKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    if (recChannel1 == true) {
        channel1.push({ key: key, time: time });
    }
    if (recChannel2 == true) {
        channel2.push({ key: key, time: time });
    }
    if (recChannel3 == true) {
        channel3.push({ key: key, time: time });
    }
    if (recChannel4 == true) {
        channel4.push({ key: key, time: time });
    }
    playSound(key);
}
function playSound(key) {
    switch (key) {
        case 'a':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 's':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'd':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 'f':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'g':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'h':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 'j':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'k':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
        case 'l':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
    }
}
