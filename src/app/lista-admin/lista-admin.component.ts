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
<<<<<<< HEAD
=======
    this.ArrayAdmin.splice(i, 1);
    Swal.fire(
      'Usuario eliminado!',
      'Usuario eliminado con éxito!',
      'info'
    )
  }
>>>>>>> cb59d87ddf8ace0c137acf7dfcf8839deab4bb6f

    Swal.fire({
      title: '¿Seguro que lo quieres eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, Eliminalo!',
    }).then((result) => {
      this.ArrayAdmin.splice(i, 1);
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Tu personaje ha sido eliminado.',
          'success'
        )
      }
    })

  }
}
