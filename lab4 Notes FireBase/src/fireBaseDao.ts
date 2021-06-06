import firebase from "firebase";
import { firebaseConfig } from "./config";
import { AppStorage } from "./IAppStorage";
import { IStorage } from "./IStorage";
import { Note } from "./Note";

export class fireBaseDao implements IStorage {
    firebaseapp:firebase.app.App;
    db:firebase.firestore.Firestore;
    constructor() {
       this.firebaseapp = firebase.initializeApp(firebaseConfig);
       this.db = this.firebaseapp.firestore()
    }
    async saveNewestId(id:number) {
        await this.db.collection('notes').doc("newestId").set({value:id});
    }
    data:Note;
    async getData() {
        let storage = new AppStorage();
        storage.newestId = await this.db.collection('notes').doc('newestId').get().then(res =>res.data().value);
        console.log(storage.newestId);
        storage.notes = [];
        for( let i = 0; i <= storage.newestId; i++) {
            
             await this.db.collection('notes').doc('Note' +i).get().then(res => {
                     
                    let d = res.data().note;
                    this.data.id=d.id;
                    this.data.main=d.main;
                    this.data.name=d.name;
                    this.data.created=d.created;
                    this.data.isPinned=d.isPinned;
             });
            if (this.data) {
                storage.notes.push( this.data);
            }
        }
        return storage;
    }
    async getSpecifiedData(id:number) {
        return await this.db.collection('notes').doc('Note' +id).get().then(res =>res.data().note);
    }
   async saveSpecifiedData(data:Note) {
        await this.db.collection('notes').doc('Note' + data.id).set({note:{id:data.id,main:data.main,name:data.name,created:data.created,isPinned:data.isPinned}});   
    }
    async removeSpecifiedData(data:Note) {
        await this.db.collection('notes').doc('Note' + data.id).delete();    localStorage.removeItem('Note' + data.id);
    }
    
}