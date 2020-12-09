import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { usuarioObject } from 'src/app/models/usuarioObject';



@Component({
  selector: 'app-registre-usuari',
  templateUrl: './registre-usuari.component.html',
  styleUrls: ['./registre-usuari.component.css']
})

export class RegistreUsuariComponent implements OnInit {
  @Output() eventos: usuarioObject[];
  @Output() emitirDatos = new EventEmitter<usuarioObject>();

  linea = new usuarioObject('','',null,'','','','');
  usuario: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      foto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      desc: ['', Validators.required],
      password: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(0)]],
      password2: ['', Validators.required]
    })
  }


  get f() {
    return this.usuario.controls;
  }

  Enviardatos():void{
    this.emitirDatos.emit(this.linea)
  }

}






