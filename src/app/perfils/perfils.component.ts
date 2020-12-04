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
    this.charactersArray.push(new Character('Joan', 'Gonzalez', 18, "Hombre", "https://pm1.narvii.com/6795/d43d352e11d7f80b3fb95342e4ac67bbf9308ec2v2_hq.jpg" , "Luchador y apasionado", "joangonzalez@patata.com", "pepe" ));
    this.charactersArray.push(new Character('Raul', 'Gimenez', 32, "Hombre", "https://i.pinimg.com/originals/23/01/b2/2301b2f2954e279cd03a138f3d1f992b.jpg" , "Emprendedor", "emprende@patata.com", "pepe" ));
    this.charactersArray.push(new Character('Joana', 'Maria', 21, "Mujer", "https://img.huffingtonpost.com/asset/5d9c96b6200000d0024f6cf8.jpeg?cache=PPev0y55AD&ops=scalefit_720_noupscale" , "Chica fitness", "gimnasio@patata.com", "pepe" ));

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

  // Función para actualizar el personaje
  updateCharacter(character: Character): void {

    // Ponemos el valor en null para que desaparezcan los detalles
    this.characterSelected = null;

    // Buscamos un personaje con el mismo nombre y lo actualizamos
    for (let i = 0; i < this.charactersArray.length; i++) {
      if (this.charactersArray[i].nomUsuari === character.nomUsuari) {
        this.charactersArray[i].edat = character.edat;

      }
    }
  }

  // Función para borrar un personaje
  deleteCharacter(character: Character) {

    // Ponemos el valor en null para que desaparezcan los detalles
    this.characterSelected = null;

    // Filtramos el array de personajes
    this.charactersArray = this.charactersArray.filter(
      (char: Character, index: number, array: Character[]) => {

        // Si el nombre del personaje es diferente al que tenemos que borrar
        if (char.nomUsuari !== character.nomUsuari) {

          // Guardamos el personaje en el array filtrado
          return char;
        }
      });
  }

  // Funcion para añadir un nuevo personaje en el array
  addCharacter(newCharacter: Character): void {
    this.charactersArray.push(newCharacter);
  }
}
