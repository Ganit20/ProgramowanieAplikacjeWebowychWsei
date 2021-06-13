import { AppStorage } from "./IAppStorage";
import { IStorage } from "./IStorage";
import { Note } from "./Note";

export class appStorageDao implements IStorage {
    createSpecifiedData(data:Note) {
        localStorage.setItem('Note' + data.id, JSON.stringify(data));
    }
    saveNewestId(id:number) {
        localStorage.setItem('NewestId',JSON.stringify(id));
    }
    getData() {
        let storage = new AppStorage();
        storage.newestId = JSON.parse(localStorage.getItem('NewestId'));
        storage.notes = [];
        for( let i = 0; i <= storage.newestId; i++) {
            let data = localStorage.getItem('Note' +i);
            if (data) {
                storage.notes.push( JSON.parse(data));
            }
        }
        return storage;
    }
    getSpecifiedData(id:number) {
        return JSON.parse(localStorage.getItem('Note' +id));
    }
    saveSpecifiedData(data:Note) {
        localStorage.setItem('Note' + data.id, JSON.stringify(data));
    }
    removeSpecifiedData(data:Note) {
        localStorage.removeItem('Note' + data.id);
    }
}