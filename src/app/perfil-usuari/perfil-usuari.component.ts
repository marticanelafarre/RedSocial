import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character.model';


@Component({
  selector: 'app-perfil-usuari',
  templateUrl: './perfil-usuari.component.html',
  styleUrls: ['./perfil-usuari.component.css']
})
export class PerfilUsuariComponent implements OnInit {

  @Input() character: Character;
  @Output() saveEvent: EventEmitter<Character> = new EventEmitter<Character>();
  @Output() deleteEvent: EventEmitter<Character> = new EventEmitter<Character>();

  constructor() { }

  ngOnInit(): void {
  }

}
