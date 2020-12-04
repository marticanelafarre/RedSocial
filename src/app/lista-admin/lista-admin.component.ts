import { Component, OnInit } from '@angular/core';
import { Character} from 'src/app/models/character.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.component.html',
  styleUrls: ['./lista-admin.component.css']
})
export class ListaAdminComponent implements OnInit {

  ArrayAdmin: Character[]=[
    {
      nombre:"marti"


    },
    {
      nombre:"alex"


    }
];

  constructor() { }

  ngOnInit(): void {
  }

  EliminarUsuario(i){
    this.ArrayAdmin.splice(i, 1);
    Swal.fire(
      'Usuario eliminado!',
      'Usuario eliminado con éxito!',
      'info'
    )
  }

}
