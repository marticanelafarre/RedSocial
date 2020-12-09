import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PerfilUsuariComponent } from './perfil-usuari/perfil-usuari.component';
import { PerfilsComponent } from './perfils/perfils.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';
import { ListaAdminComponent } from './lista-admin/lista-admin.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'perfils'},
  {path: 'perfils', component: PerfilsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'perfilUsuari', component: PerfilUsuariComponent},
  {path: 'registreUsuari', component: RegistreUsuariComponent},
  {path: 'listaAdmin', component: ListaAdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
