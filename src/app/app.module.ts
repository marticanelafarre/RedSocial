import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilUsuariComponent } from './perfil-usuari/perfil-usuari.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PerfilsComponent } from './perfils/perfils.component';
import { RegistroComponent } from './registro/registro.component';
import { LlistaComponent } from './llista/llista.component';
import { DetallsComponent } from './detalls/detalls.component';
import { AdminComponent } from './admin/admin.component';
import { ListaAdminComponent } from './lista-admin/lista-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    PerfilUsuariComponent,
    RegistreUsuariComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PerfilsComponent,
    RegistroComponent,
    LlistaComponent,
    DetallsComponent,
    AdminComponent,
    ListaAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
