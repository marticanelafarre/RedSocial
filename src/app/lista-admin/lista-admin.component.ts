import { Component, OnInit } from '@angular/core';

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
      sexe: "Hombre",
      foto: "",
      desc: "Amable",
      correu: "prova@gmail.com"

    },
    {
      nomUsuari: "Ete",
      cognom: "Sech",
      edat: 35,
      sexe: "Hombre",
      foto: "",
      desc: "Solidario",
      correu: "marticanela2015@gmail.com"
    },
    {
      nomUsuari: "Sea",
      cognom: "Sech",
      edat: 14,
      sexe: "Hombre",
      foto: "",
      desc: "Amable",
      correu: "marticanela2015@gmail.com"
    },
    {
      nomUsuari: "Lea",
      cognom: "Sech",
      edat: 23,
      sexe: "Hombre",
      foto: "",
      desc: "Solidario",
      correu: "marticanela2015@gmail.com"
    },
    {
      nomUsuari: "Pea",
      cognom: "Sech",
      edat: 45,
      sexe: "Hombre",
      foto: "",
      desc: "Amable",
      correu: "marticanela2015@gmail.com"
    },
    {
      nomUsuari: "Rea",
      cognom: "Sech",
      edat: 25,
      sexe: "Hombre",
      foto: "",
      desc: "Solidario",
      correu: "marticanela2015@gmail.com"
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
