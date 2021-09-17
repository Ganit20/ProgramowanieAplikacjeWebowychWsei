import { appStorageDao } from "../appStorageDao";
import {MainClass} from "../MainClass";
import { Note } from "../Note";
var m = new MainClass();
var a = new appStorageDao();
test("sort test", () =>{
    expect(m.SortNodes(new Note(0),new Note(1))).toBe(-1);
});
test("sort test 2", () =>{
    expect(m.SortNodes(new Note(1),new Note(0))).toBe(1);
});
test("sort test 3", () =>{
    expect(m.SortNodes(new Note(1),new Note(1))).toBe(0);
});
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('localhost:8080');
    await page.screenshot({path: 'screen.png'});
    await page.waitForSelector('#mainNoteContainer0');
    await page.screenshot({path: 'addedNote.png'})
    await browser.close();
})();