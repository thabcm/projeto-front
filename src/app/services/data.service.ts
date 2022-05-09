import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    public data: Array<any> = [];
    
    public setData(result: Array<any>) {
        sessionStorage.setItem('lista', JSON.stringify(result));
    }

    public getData() {
        return this.data;
    }

}