import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DefaultComponent} from './components/default/default.component';
import { BuscadoIncidenciasComponent } from './components/buscado-incidencias/buscado-incidencias.component';
import { BuscadorIncidenciasFechaComponent } from './components/buscador-incidencias-fecha/buscador-incidencias-fecha.component';
import { BuscadorIncidenciasNombreComponent } from './components/buscador-incidencias-nombre/buscador-incidencias-nombre.component';


const appRoutes:Routes = [
    {path:'',component:DefaultComponent},
    {path:'login',component:LoginComponent},
    {path:'logout/:sure',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'buscador',component:BuscadoIncidenciasComponent},
    {path:'buscadorfecha',component:BuscadorIncidenciasFechaComponent},
    {path:'buscadornombre',component:BuscadorIncidenciasNombreComponent},
    {path:'**',component:DefaultComponent}
];

export const appRoutingProviders:any=[]
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)