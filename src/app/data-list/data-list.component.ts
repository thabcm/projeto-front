import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent {
  data: any;
  displayedColumns: string[] = ['picture', 'name', 'gender', 'nationality', 'email'];

  constructor(
    private router: Router,
    private store: Store<any>
  ) {}
  
  ngOnInit(): void {
    this.getStorage();
  }

  // Recupera dados de usuários do storage
  public getStorage(): void {
    this.store
    .select('usersList')
    .pipe(take(1))
    .subscribe(usersList => {
      this.data = usersList;
    });
  }

  // Volta para tela de pesquisa
  toSearch() {
    this.router.navigate(['/search']);
  }
}
