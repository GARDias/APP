import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Pessoa} from './Pessoa'
import {Lista} from 'treinamento043:8080/pessoa'
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

    getPessoas() : Pessoa[]{
      return Lista;
    }

  constructor() { }
}
