import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilUsuariComponent } from './perfil-usuari/perfil-usuari.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';
import { PanellAdminComponent } from './panell-admin/panell-admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PerfilsComponent } from './perfils/perfils.component';
import { RegistroComponent } from './registro/registro.component';
import { LlistaComponent } from './llista/llista.component';
import { DetallsComponent } from './detalls/detalls.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilUsuariComponent,
    RegistreUsuariComponent,
    PanellAdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PerfilsComponent,
    RegistroComponent,
    LlistaComponent,
    DetallsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
