import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  title = 'Projeto Viv';
  apiUrl = 'https://randomuser.me/api/?results=3';
  data: any;
  displayedColumns: string[] = ['picture', 'name', 'gender', 'nationality', 'email'];

  nationalities: Array<any> = [
    { name: 'Australia', value: 'AU' },
    { name: 'Brasil', value: 'BR' },
    { name: 'Canadá', value: 'CA' },
    { name: 'França', value: 'FR' },
    { name: 'Estados Unidos', value: 'US' }
  ];

  constructor(
    private http : HttpClient,
    private dataService: DataService,
    private router: Router
    ) {}

  // Inicialização de formulário
  form = new FormGroup({
    gender: new FormControl('', Validators.required),
    nationalities:  new FormArray([])
  });

  // Detectou mudanças no checkbox
  onCheckboxChange(event: any) {
    const nationalities = (this.form.controls.nationalities as FormArray);
    if (event.target.checked) {
      nationalities.push(new FormControl(event.target.value));
    } else {
      const index = nationalities.controls
      .findIndex(x => x.value === event.target.value);
      nationalities.removeAt(index);
    }
  }

  // Salva dados de usuários no service
  saveData() {
    this.dataService.setData(this.data.results);
    alert('Usuários salvos na lista!');
    this.router.navigate(['/data-list']);
  }

  // Navega para tela de lista de usuários
  viewData() {
    this.router.navigate(['/data-list']);
  }

  // Recupera usuários da API
  searchData(){
    const nationalities = this.form.value.nationalities.map((name: string) => {
      let nationality = name;
      return nationality;
    })

    if (this.form.value.gender == 'both') {
      this.http.get(`${ this.apiUrl }&nat=${nationalities}`)
      .subscribe(result => {
        this.data = result;
      }, (error) => {
        alert(error.error);
      });
    } else {
      this.http.get(`${ this.apiUrl }&gender=${this.form.value.gender}&nat=${nationalities}`)
      .subscribe(result => {
        this.data = result;
      }, (error) => {
        alert(error.error);
      });
    }

  }
}

