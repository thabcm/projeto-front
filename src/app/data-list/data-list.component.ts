import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent {
  data: any;
  displayedColumns: string[] = ['picture', 'name', 'gender', 'nationality', 'email'];

  constructor(
    private router: Router
  ) {}
  
  // Recupera dados de usuários do storage ao inicializar
  ngOnInit(): void {
    const storage = sessionStorage.getItem('lista') || '';
    this.data = JSON.parse(storage);
  }

  // Volta para tela de pesquisa
  voltar() {
    this.router.navigate(['/search']);
  }
}
