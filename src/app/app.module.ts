import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilUsuariComponent } from './perfil-usuari/perfil-usuari.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';
import { PanellAdminComponent } from './panell-admin/panell-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilUsuariComponent,
    RegistreUsuariComponent,
    PanellAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
