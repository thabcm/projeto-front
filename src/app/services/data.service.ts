import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrlConst } from '../utils/const-list';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    public data: Array<any> = [];
    
    constructor(
        private http : HttpClient
    ) {}
        
    public searchData(gender: string, nationalities: string): Observable<any> {
        if (gender == 'both') {
            return this.http.get(`${ apiUrlConst }&nat=${nationalities}`);
          } else {
            return this.http.get(`${ apiUrlConst }&gender=${gender}&nat=${nationalities}`);
        }
    }
    
    public setData(result: Array<any>) {
        sessionStorage.setItem('lista', JSON.stringify(result));
    }

    public getData() {
        return this.data;
    }

}