let kickSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

let channel1: any[] = [];
let channel2: any[] = [];
let channel3: any[] = [];
let channel4: any[] = [];
let recChannel1:boolean = false;
let recChannel2:boolean = false;
let recChannel3:boolean = false;
let recChannel4:boolean = false;
appStart();

function appStart() {
    document.addEventListener('keypress', onKeyPress);
    const btnPlayChannel1 = document.querySelector('#playChannel1')
    const btnPlayChannel2 = document.querySelector('#playChannel2')
    const btnPlayChannel3 = document.querySelector('#playChannel3')
    const btnPlayChannel4 = document.querySelector('#playChannel4')
    const btnRecChannel1 = document.querySelector('#recordChannel1')
    const btnRecChannel2 = document.querySelector('#recordChannel2')
    const btnRecChannel3 = document.querySelector('#recordChannel3')
    const btnRecChannel4 = document.querySelector('#recordChannel4')
    const a = document.querySelector('#a')
    const s = document.querySelector('#s')
    const d = document.querySelector('#d')
    const f = document.querySelector('#f')
    const g = document.querySelector('#g')
    const h = document.querySelector('#h')
    const j = document.querySelector('#j')
    const k = document.querySelector('#k')
    const l = document.querySelector('#l')
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    btnPlayChannel2.addEventListener('click', onPlayChannel2);
    btnPlayChannel3.addEventListener('click', onPlayChannel3);
    btnPlayChannel4.addEventListener('click', onPlayChannel4);
    btnRecChannel1.addEventListener('click', onRecChannel1);
    btnRecChannel2.addEventListener('click', onRecChannel2);
    btnRecChannel3.addEventListener('click', onRecChannel3);
    btnRecChannel4.addEventListener('click', onRecChannel4);
    a.addEventListener('click', function() {playSound("a");});
    s.addEventListener('click', function() {playSound("s");});
    d.addEventListener('click', function() {playSound("d");});
    f.addEventListener('click', function() {playSound("f");});
    g.addEventListener('click', function() {playSound("g");});
    h.addEventListener('click', function() {playSound("h");});
    j.addEventListener('click', function() {playSound("j");});
    k.addEventListener('click', function() {playSound("k");});
    l.addEventListener('click', function() {playSound("l");});
    getAudioElements();
}
function onRecChannel1(): void {
    const btnRecChannel1 = document.querySelector('#recordChannel1') as HTMLButtonElement;
    if(recChannel1 ==false) {
    btnRecChannel1.innerText = "Stop recording 1";
    recChannel1=true;
    channel1 = [];

    } else {
        btnRecChannel1.innerText = "Start recording 1";
    recChannel1=false;
    }
}
function onRecChannel2(): void {
    const btnRecChannel2 = document.querySelector('#recordChannel2') as HTMLButtonElement;
    if(recChannel2 ==false) {
    btnRecChannel2.innerText = "Stop recording 2";
    recChannel2=true;
    channel2 = [];
    } else {
        btnRecChannel2.innerText = "Start recording 2";
    recChannel2=false;
    }
}
function onRecChannel3(): void {
    const btnRecChannel3 = document.querySelector('#recordChannel3') as HTMLButtonElement;
    if(recChannel3 ==false) {
    btnRecChannel3.innerText   = "Stop recording 3";
    recChannel3=true;
    channel3 = [];
    } else {
        btnRecChannel3.innerText  = "Start recording 3";
    recChannel3=false;
    }
}
function onRecChannel4(): void {
    const btnRecChannel4 = document.querySelector('#recordChannel4') as HTMLButtonElement;
    if(recChannel4 ==false) {
    btnRecChannel4.innerText = "Stop recording 4";
    recChannel4=true;
    channel4 = [];
    } else {
        btnRecChannel4.innerText = "Start recording 4";
    recChannel4=false;
    }
}
function onPlayChannel1(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}
function onPlayChannel2(): void {
    channel2.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}
function onPlayChannel3(): void {
    channel3.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}
function onPlayChannel4(): void {
    channel4.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}

function getAudioElements(): void {
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

function onKeyPress(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;
    if(recChannel1==true){
    channel1.push({ key, time })
    }
    if(recChannel2==true){
    channel2.push({ key, time })
    }
    if(recChannel3==true){
    channel3.push({ key, time })
    }
    if(recChannel4==true){
    channel4.push({ key, time })
    }

    playSound(key);
}

function playSound(key: string) {
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
