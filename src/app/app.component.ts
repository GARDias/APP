import { Component, OnInit } from '@angular/core';
import {Pessoa} from './Pessoa'
//import {pessoas} from './Lista'
import{pessoas} from './pessoa.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lista: Array<Pessoa>;
  pessoa : Pessoa;
  id_contador : number = 0;
  constructor(){  }

  ngOnInit(){
      this.pessoa = new Pessoa;
      this.lista = pessoas;
  }

  public salvar(): void{
      if(this.lista.includes(this.lista[this.pessoa.id]) || this.lista.length ==  0){
        this.id_contador++;
        this.pessoa.id = this.id_contador;
        this.lista.push(this.pessoa);
        this.pessoa = new Pessoa();
      } else{
        this.lista[this.pessoa.id] = this.pessoa;
      }
  }

  public Alterar(p: Pessoa){
      this.pessoa.id = p.id;
      this.pessoa.nome = p.nome;
      this.pessoa.sobrenome = p.sobrenome;
      console.log(p.id);
  }
  public excluir(p:Pessoa){
    this.lista.splice(p.id);
  }

  title = 'Gabriel';
}

 
