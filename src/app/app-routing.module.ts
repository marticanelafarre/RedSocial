import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanellAdminComponent } from './panell-admin/panell-admin.component';
import { PerfilUsuariComponent } from './perfil-usuari/perfil-usuari.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'panellAdmin', component: PanellAdminComponent},
  {path: 'perfilUsuari', component: PerfilUsuariComponent},
  {path: 'registreUsuari', component: RegistreUsuariComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
