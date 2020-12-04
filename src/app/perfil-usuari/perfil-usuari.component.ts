import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { usuariObject } from 'src/app/models/character.model';



@Component({
  selector: 'app-perfil-usuari',
  templateUrl: './perfil-usuari.component.html',
  styleUrls: ['./perfil-usuari.component.css']
})
export class PerfilUsuariComponent implements OnInit {

  @Input() character: usuariObject;
  @Output() saveEvent: EventEmitter<usuariObject> = new EventEmitter<usuariObject>();
  @Output() deleteEvent: EventEmitter<usuariObject> = new EventEmitter<usuariObject>();

  constructor() { }

  ngOnInit(): void {
  }

}
