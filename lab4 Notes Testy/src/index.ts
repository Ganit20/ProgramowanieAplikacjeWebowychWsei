import  {MainClass}  from './MainClass';
import {  INote } from './INote';
import './main.scss';
import { AppStorage } from './IAppStorage';
let submitButton = document.body.querySelector("#addNote") as HTMLElement;
let app = new MainClass();
var a = app.appStorageDao.getData() as AppStorage;
app.storage=a;
console.log(a);
if(a.notes!=undefined && a.notes.length>0) {
    app.ListNodes();
}
submitButton.addEventListener('click', () => {
    app.createNewNote();
});

