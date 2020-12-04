import { Component, OnInit } from '@angular/core';
import { usuarioObject} from 'src/app/models/usuarioObject';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.component.html',
  styleUrls: ['./lista-admin.component.css']
})
export class ListaAdminComponent implements OnInit {

  ArrayAdmin: usuarioObject[]=[
    {
      nomUsuari: "Pepe",
      cognom: "Rodriguez",
      edat: 57,
      foto: "",
      desc: "Amable",
      correu: "prova@gmail.com"

    },
    {
      nomUsuari: "Ete",
      cognom: "Sech",
      edat: 35,
      foto: "",
      desc: "Solidario",
      correu: "marticanela2015@gmail.com"
    }
];

  constructor() { }

  ngOnInit(): void {
  }

  EliminarUsuario(i){
    Swal.fire({
      title: '¿Seguro que lo quieres eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, Eliminalo!',
    }).then((result) => {
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
