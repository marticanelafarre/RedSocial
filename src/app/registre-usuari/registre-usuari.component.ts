import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarioObject } from 'src/app/models/usuarioObject';
import Swal from 'sweetalert2';
//importamos librerias necesarias


@Component({
  selector: 'app-registre-usuari',
  templateUrl: './registre-usuari.component.html',
  styleUrls: ['./registre-usuari.component.css']
})

export class RegistreUsuariComponent implements OnInit {

  //creamos los Outputs del objeto para pasarlo a la pagina de perfiles
  @Output() emitirDatos = new EventEmitter<usuarioObject>();

  //creamos un objeto que se llenara con los datos introducidos por el usuario
  linea = new usuarioObject('','',null,'','','','','');

  //creamos un form group para hacer formulario reactivo
  usuario: FormGroup;

  //creamos valor submited para saber si se ha enviado o no
  submitted = false;

  //en el constructor añadimos un form builder
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    //arrancamos el form usuario con las perspectivas normativas
    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      DNI: ['', [Validators.required, Validators.pattern("^[0-9]{8}[A-Za-z]$")]],
      foto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      desc: ['', Validators.required],
      password: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(0)]]
      // password2: ['', Validators.required]
    })
  }


  get f() {
    return this.usuario.controls;
  }

  //enviamos los datos
  Enviardatos(){
    this.submitted = true;
    if (this.usuario.invalid) {

      //en caso de ser invalido debuelve los errores y manda un sweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Completa correctament la informació!',
      })
      return;
    }

    //emite los datos a la array
    this.emitirDatos.emit(this.linea)
  }

}






