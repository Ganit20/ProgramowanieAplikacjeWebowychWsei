import { INote } from "./INote";

export class Note  {
    constructor(id:number) {
        this.id=id;
        this.main = "";
        this.name = "";
        this.created = Date.now();
        this.isPinned = false;
        this.color = "#FF0000";
    }
    public main: string;
    public name: string;
    public id: number;
    public color: string;
    public created: number;
    public isPinned: boolean;

    
}