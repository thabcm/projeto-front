import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetUsersList } from '../redux/actions/users-list.actions';
import { apiUrlConst } from '../utils/const-list';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    public data: Array<any> = [];
    
    constructor(
        private http : HttpClient,
        private store: Store<any>
    ) {}
        
    public searchData(gender: string, nationalities: string): Observable<any> {
        if (gender == 'both') {
            return this.http.get(`${ apiUrlConst }&nat=${nationalities}`);
          } else {
            return this.http.get(`${ apiUrlConst }&gender=${gender}&nat=${nationalities}`);
        }
    }
    
    public setData(result: Array<any>) {
        this.store.dispatch(new SetUsersList(result));
    }

    public getData() {
        return this.data;
    }

}