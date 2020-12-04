import { Component, OnInit } from '@angular/core';
import { Character } from '../models/usuarioObject';

@Component({
  selector: 'app-perfils',
  templateUrl: './perfils.component.html',
  styleUrls: ['./perfils.component.css']
})
export class PerfilsComponent implements OnInit {
  character: Character[] = [];
  characterSelected: Character = null;
  constructor() { }

  ngOnInit(): void {
    // Cargamos el personaje que tengamos guardado previamente en memoria del navegador
    let character = localStorage.getItem('character');
    this.characterSelected = JSON.parse(character);
  }
  vacio: string;
  public contenido: string;
  mostrarError: string = "";
  mostrarError2: string = "";
  mostrarError3: string = "";
  mailPatt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //esta funcion lo que hace es mostrarnos iferentes contenedores de el componente Eventos dependiendo de su opcion seleccionada.
  elegirAccion(accion) {
    //en caso de que la accion sea "anadir"
    if (accion.target.value == "registrar") {
      //mostrara el contenido "anadir" y asi succesivamente
      this.contenido = "registrar"
    } else {
      //en caso de no ser ninguna de las 3, se mostrara un espacio vacio
      this.vacio = "";
    }
  }
  // Función que se ejecuta al hacer click en un personaje de la lista
  selectCharacter(character: Character): void {
    // Guardamos en una variable de la clase el personaje seleccionado
    this.characterSelected = character;
    // Guardamos en el local storage del navegador el personaje seleccionado
    localStorage.setItem('character', JSON.stringify(character));
  }
}
