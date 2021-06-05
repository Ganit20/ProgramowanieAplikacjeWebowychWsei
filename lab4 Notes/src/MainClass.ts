import { appStorageDao } from './appStorageDao';
import { AppStorage } from './IAppStorage';
import {  INote } from './INote';
import { Note } from './Note';

 export class MainClass {
    storage:AppStorage;
    appStorageDao:appStorageDao;
     constructor() {
         this.storage = new AppStorage();
        this.appStorageDao = new appStorageDao();
     }

    async createNewNote() {

        if(this.storage.newestId==undefined)
            this.storage.newestId=0;
        if(this.storage.notes==undefined)
        this.storage.notes=  [];
        let note = new Note(this.storage.newestId);
        this.storage.notes.push(note);
        this.storage.newestId++;
        this.appStorageDao.saveData(this.storage);
        document.body.querySelector("#noteList").appendChild(this.CreateNoteElement(note));
    }
    ListNodes() {
        let sortedNotes = this.storage.notes.sort((ob1:Note,ob2:Note): number => {
            if (ob1.isPinned && !ob2.isPinned) {
                return -1;
            } else if (!ob1.isPinned && ob2.isPinned) { 
                return 1;
            }
            if (ob1.id < ob2.id) { 
                return -1;
            } else if (ob1.id > ob2.id) {
                return 1
            } else { 
                return 0;
            }

    });
    for (const value of sortedNotes) {
        document.body.querySelector("#noteList").appendChild(this.CreateNoteElement(value));
    };
}
        refreshList() {
            (document.body.querySelector("#noteList") as HTMLDivElement).innerHTML = '';
            this.ListNodes();
        }

        save() {
            // for (const value of this.storage.notes) {
            //     value.name = document.body.querySelector("#mainNoteContainer" + value.id).querySelector(".titleInput").nodeValue;
            //     value.main = document.body.querySelector("#mainNoteContainer" + value.id).querySelector(".descriptionInput").nodeValue;
            // };
            this.appStorageDao.saveData(this.storage);
        }
        textChange(input:HTMLInputElement, storage:AppStorage) {
            if(input.parentElement==undefined)
                return;
            let id = input.parentElement.id;
            id = id.replace("mainNoteContainer","");
            let element = storage.notes.find(x=>x.id.toString()==id);
            if(input.className.includes("title")) {
               element.name=input.value;
            }
            else  if(input.className.includes("description")) {
                element.main=input.value;
            }
        }
         pin(input:HTMLInputElement, storage:AppStorage) {
            if(input.parentElement==undefined)
            return;
            let id = input.parentElement.id;
            id = id.replace("topNoteContainer","");
            let element = storage.notes.find(x=>x.id.toString()==id);
            element.isPinned = !element.isPinned;
        }
         Delete(input:HTMLInputElement, storage:AppStorage) {
            if(input.parentElement==undefined)
            return;
            let id = input.parentElement.id;
            let cid = id.replace("topNoteContainer","") as unknown as number;
            for( var i = 0; i < storage.notes.length; i++){ 
    
                if ( storage.notes[i].id == cid) { 
            
                    storage.notes.splice(i, 1); 
                }
            
            }
        }
        public colorChange = (input:HTMLInputElement, storage:AppStorage ) => {
            if(input.parentElement==undefined)
                return;
            let id = input.parentElement.id;
            id = id.replace("topNoteContainer","");
            let element = storage.notes.find(x=>x.id.toString()==id);
            (document.body.querySelector("#mainNoteContainer" + element.id) as HTMLDivElement).style.background=input.value;
            (document.body.querySelector("#topNoteContainer" + element.id) as HTMLDivElement).style.background=input.value;
            element.color=input.value;
        }
    CreateNoteElement(element:Note) {
        let mainContainer: HTMLDivElement = this.CreateDiv("noteMainContainer",element.color,"mainNoteContainer" + element.id);
        let topButtonContainer: HTMLDivElement = this.CreateDiv("topButtonContainer",element.color,"topNoteContainer" + element.id);

        mainContainer.appendChild(topButtonContainer);
        topButtonContainer.appendChild(this.CreateInput("colorInput input",element.color,"color",this.colorChange,element.id.toString() ));
        topButtonContainer.appendChild(this.CreateButton("pinButton Btn","Przypnij",this.pin));
        topButtonContainer.appendChild(this.CreateButton("deleteButton Btn","Usuń",this.Delete));
        mainContainer.appendChild(this.CreateInput( "titleInput input",element.name,"text",this.textChange));
        mainContainer.appendChild(this.CreateTextArea( "descriptionInput input",element.main,"text",this.textChange));
        return mainContainer;
    }
    CreateButton(className:string,value:string,click:Function) {
        let button: HTMLButtonElement = document.createElement("button");
        button.className = className;
        button.innerText=value;
        button.addEventListener('click', () => { 
            click(button,this.storage);
            this.save();
            this.refreshList();
        });
        return button;
    }
    CreateTextArea(className:string,value:string,type:string,change:Function,id:string="") {
        let Input: HTMLTextAreaElement = document.createElement("textarea");
        Input.addEventListener('change', () => { 
            change(Input,this.storage);
            this.save();
        });
        Input.value= value;
        Input.className = className;
        return Input;
    }
    CreateInput(className:string,value:string,type:string,change:Function,id:string="") {
        let Input: HTMLInputElement = document.createElement("input");
        Input.addEventListener('change', () => { 
            change(Input,this.storage);
            this.save();
        });
        Input.value= value;
        Input.type= type;
        Input.className = className;
        return Input;
    }
    CreateDiv(className:string,background:string,id:string) {
        let container: HTMLDivElement = document.createElement("div");
        container.id = id;
        container.className = className;
        container.style.background = background;
        return container;
    }
    
}