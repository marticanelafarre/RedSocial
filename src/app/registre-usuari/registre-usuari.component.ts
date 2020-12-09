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

  usuario: FormGroup;
  submitted = false;

  public nombre = '';
  public apellido = '';
  public edad: number = null;
  public sexo = '';
  public foto = '';
  public descr = '';
  public correo = '';
  public password = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      foto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      descr: ['', Validators.required],
      password: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(0)]],
      password2: ['', Validators.required]
    })
  }


  get f() {
    return this.usuario.controls;
  }

  Enviardatos(nomUsuari, cognom, edat, sexe, foto, descr, correu, password) {
     this.nombre = nomUsuari;
     this.apellido = cognom;
     this.edad = edat;
     this.sexo =sexe ;
     this.foto = foto ;
     this.descr = descr;
     this.correo = correu;
     this.password = password;
    this.submitted = true;
    if (this.usuario.invalid) {
      return;
    }
    this.emitirDatos.emit({nomUsuari: this.nombre, cognom: this.apellido, edat: this.edad, foto: this.foto, sexe: this.sexo, desc: this.descr, correu: this.correo, password: this.password });
    Swal.fire("Los datos son correctos")
  }

}






