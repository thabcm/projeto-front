import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    public data: Array<any> = [];
    
    public setData(result: Array<any>) {
        result.map((name: string) => {
            this.data.push(name);
        })
    }

    public getData() {
        return this.data;
    }

}