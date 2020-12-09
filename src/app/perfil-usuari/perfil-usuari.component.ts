import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { usuarioObject } from 'src/app/models/usuarioObject';



@Component({
  selector: 'app-perfil-usuari',
  templateUrl: './perfil-usuari.component.html',
  styleUrls: ['./perfil-usuari.component.css']
})
export class PerfilUsuariComponent implements OnInit {


  //INPUT PARA SABER LA INFORMACION
  @Input() character: usuarioObject;


  constructor() { }

  ngOnInit(): void {
  }

}
