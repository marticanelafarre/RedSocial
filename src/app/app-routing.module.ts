import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { PanellAdminComponent } from './panell-admin/panell-admin.component';
import { PerfilUsuariComponent } from './perfil-usuari/perfil-usuari.component';
import { PerfilsComponent } from './perfils/perfils.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'perfils', component: PerfilsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'panellAdmin', component: PanellAdminComponent},
  {path: 'perfilUsuari', component: PerfilUsuariComponent},
  {path: 'registreUsuari', component: RegistreUsuariComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
