import  {MainClass}  from './MainClass';
import {  weather } from './city';
import './main.scss';
let submitButton = document.body.querySelector("#cityAdd") as HTMLElement;
let app = new MainClass();
var a = app.getData() as weather[];
console.log(a);
if(a!=undefined && a.length>0) {
for (const value of a) {
    app.createWeatherDiv(value);
};}
submitButton.addEventListener('click', () => {
    let cityName = app.getCityInfo();
});

