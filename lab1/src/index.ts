// const header = document.createElement('h1');
// header.innerHTML = "Hello world";

// document.body.appendChild(header);

// let a: number = 10;
// let imie: string = 'ania';
// let czyZwierze: boolean = false;

// const nazw = 'kot'; //sprawdź typ...:)

let imie: string;
const imieDOM = document.querySelector('#imie');

// imie = (<HTMLInputElement>imieDOM).value; // starszy sposób
imie = (imieDOM as HTMLInputElement).value;

let zwierzaki: string[];
zwierzaki = ['kot','pies','ryś'];

function dodaj(a: number, b: number) {
}

let aaa = dodaj(0,0);
