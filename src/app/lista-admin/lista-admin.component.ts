import { Component, OnInit } from '@angular/core';
import { usuarioObject } from 'src/app/models/usuarioObject';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.component.html',
  styleUrls: ['./lista-admin.component.css']
})
export class ListaAdminComponent implements OnInit {

  //se crea una array con los diferentes usuarios
  ArrayAdmin: usuarioObject[]=[
    {
      nomUsuari: "Pepe",
      cognom: "Rodriguez",
      edat: 57,
      DNI: "43530455B",
      foto: "",
      desc: "Amable",
      correu: "prova@gmail.com"

    },
    {
      nomUsuari: "Ete",
      cognom: "Sech",
      edat: 35,
      DNI: "73287826M",
      foto: "",
      desc: "Solidario",
      correu: "marticanela2015@gmail.com"
    },
    {
      nomUsuari: "Sea",
      cognom: "Sech",
      edat: 14,
      DNI: "78561930W",
      foto: "",
      desc: "Amable",
      correu: "marticanela2015@gmail.com"
    },
    {
      nomUsuari: "Lea",
      cognom: "Sech",
      edat: 23,
      DNI: "25142072J",
      foto: "",
      desc: "Solidario",
      correu: "marticanela2015@gmail.com"
    },
    {
      nomUsuari: "Pea",
      cognom: "Sech",
      edat: 45,
      DNI: "Hombre",
      foto: "",
      desc: "Amable",
      correu: "marticanela2015@gmail.com"
    },
    {
      nomUsuari: "Rea",
      cognom: "Sech",
      edat: 25,
      DNI: "22504175D",
      foto: "",
      desc: "Solidario",
      correu: "marticanela2015@gmail.com"
    }
];

  constructor() { }

  ngOnInit(): void {
  }

  //creamos el metodo eliminar usuario, a este le pasamos la variable "i" que servira para saber que usuario ha seleccionado el cliente para asi eliminarlo
  EliminarUsuario(i){

    //mostramos un sweetAlert2 que nos preguntara si estamos seguros de lo que vamos a realizar
    Swal.fire({
      title: '¿Seguro que lo quieres eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: '¡Si, Eliminalo!',
    }).then((result) => { //en este caso, si hace click en eliminar se eliminara con el metodo splice
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Tu personaje ha sido eliminado.',
          'success'
        )
        this.ArrayAdmin.splice(i, 1);
      }
    })

}
}
