import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { usuarioObject } from 'src/app/models/usuarioObject';



@Component({
  selector: 'app-perfil-usuari',
  templateUrl: './perfil-usuari.component.html',
  styleUrls: ['./perfil-usuari.component.css']
})
export class PerfilUsuariComponent implements OnInit {

  @Input() character: usuarioObject;
  @Output() saveEvent: EventEmitter<usuarioObject> = new EventEmitter<usuarioObject>();
  @Output() deleteEvent: EventEmitter<usuarioObject> = new EventEmitter<usuarioObject>();

  constructor() { }

  ngOnInit(): void {
  }

}
