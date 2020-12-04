import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-perfils',
  templateUrl: './perfils.component.html',
  styleUrls: ['./perfils.component.css']
})
export class PerfilsComponent implements OnInit {
  charactersArray: Character[] = [];
  characterSelected: Character = null;
  isCreatingNewChar: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.charactersArray.push(new Character('Joan', 'Gonzalez', 18, 'Hombre', 'https://pm1.narvii.com/6795/d43d352e11d7f80b3fb95342e4ac67bbf9308ec2v2_hq.jpg', 'Luchador y apasionado', 'joangonzalez@patata.com', 'pepe'));
    this.charactersArray.push(new Character('Joan', 'Gonzalez', 18, 'Hombre', 'https://pm1.narvii.com/6795/d43d352e11d7f80b3fb95342e4ac67bbf9308ec2v2_hq.jpg', 'Luchador y apasionado', 'joangonzalez@patata.com', 'pepe'));
    this.charactersArray.push(new Character('Joan', 'Gonzalez', 18, 'Hombre', 'https://pm1.narvii.com/6795/d43d352e11d7f80b3fb95342e4ac67bbf9308ec2v2_hq.jpg', 'Luchador y apasionado', 'joangonzalez@patata.com', 'pepe'));

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

    // Quitamos la interfaz de crear un personaje
    this.isCreatingNewChar = false;

    // Guardamos en una variable de la clase el personaje seleccionado
    this.characterSelected = character;

    // Guardamos en el local storage del navegador el personaje seleccionado
    localStorage.setItem('character', JSON.stringify(character));
  }

  // Funcion para añadir un nuevo personaje en el array
  addCharacter(newCharacter: Character): void {
    this.charactersArray.push(newCharacter);
  }
}
