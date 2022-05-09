import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { displayedColumnsConst, nationalitiesConst } from '../utils/const-list';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  title = 'Projeto Viv';
  data: any;
  displayedColumns = displayedColumnsConst;
  nationalities = nationalitiesConst;

  constructor(
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

  // Salva dados de usuários
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
    let gender = this.form.value.gender;

    this.dataService.searchData(gender, nationalities)
    .subscribe(result => {
      this.data = result;
    }, (error) => {
      alert(error.error);
    });

  }
}

