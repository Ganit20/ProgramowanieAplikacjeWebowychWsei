import { AppStorage } from "./IAppStorage";

export class appStorageDao {
    saveData(data: AppStorage) {
        localStorage.setItem('SiteData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('SiteData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}