import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { usuarioObject } from 'src/app/models/usuarioObject';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfils',
  templateUrl: './perfils.component.html',
  styleUrls: ['./perfils.component.css']
})
export class PerfilsComponent implements OnInit {
  charactersArray: usuarioObject[] = [];
  characterSelected: usuarioObject = null;
  isCreatingNewChar: boolean = false;

  //importamos los inputs del objeto usuario
  @Input() character: usuarioObject;


  constructor() { }

  ngOnInit(): void {

    //AÑADIMOS NUEVOS USUARIOS
    this.charactersArray.push(new usuarioObject('Joan', 'Gonzalez', 18, '14549539S', 'https://pm1.narvii.com/6795/d43d352e11d7f80b3fb95342e4ac67bbf9308ec2v2_hq.jpg', 'Luchador y apasionado', 'joangonzalez@patata.com', 'pepe'));
    this.charactersArray.push(new usuarioObject('Raul', 'Gimenez', 32, "12083340Z", "https://i.pinimg.com/originals/23/01/b2/2301b2f2954e279cd03a138f3d1f992b.jpg" , "Emprendedor", "emprende@patata.com", "pepe" ));
    this.charactersArray.push(new usuarioObject('Joana', 'Maria', 21, "41795311X", "https://okdiario.com/img/2019/08/26/personajes-de-animacion-mas-famosos-655x368.jpg" , "Chica fitness", "gimnasio@patata.com", "pepe" ));

    // Cargamos el personaje que tengamos guardado previamente en memoria del navegador
    let character = localStorage.getItem('usuarioObject');
    this.characterSelected = JSON.parse(character);
  }
  vacio: string;
  public contenido: string;
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
  selectCharacter(character: usuarioObject): void {

    // Quitamos la interfaz de crear un personaje
    this.isCreatingNewChar = false;

    // Guardamos en una variable de la clase el personaje seleccionado
    this.characterSelected = character;

    // Guardamos en el local storage del navegador el personaje seleccionado
    localStorage.setItem('character', JSON.stringify(character));
  }

  // Funcion para añadir un nuevo personaje en el array
 anadirUsuario(eventoHijo) {
    this.charactersArray.push(new usuarioObject(eventoHijo.nomUsuari,eventoHijo.cognom, eventoHijo.edat, eventoHijo.sexe, eventoHijo.foto, eventoHijo.desc, eventoHijo.correu,eventoHijo.password));
    Swal.fire("Añadido correctamente")
  }

}
