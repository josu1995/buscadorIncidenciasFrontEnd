import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DefaultComponent} from './components/default/default.component';
import { BuscadoIncidenciasComponent } from './components/buscado-incidencias/buscado-incidencias.component';
import { BuscadorIncidenciasFechaComponent } from './components/buscador-incidencias-fecha/buscador-incidencias-fecha.component';
import { BuscadorIncidenciasNombreComponent } from './components/buscador-incidencias-nombre/buscador-incidencias-nombre.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    BuscadoIncidenciasComponent,
    BuscadorIncidenciasFechaComponent,
    BuscadorIncidenciasNombreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
    
  ],
  providers: [
    appRoutingProviders,
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
