import { Component, OnInit } from '@angular/core';
import {IncidenciaService} from '../../services/incidencia.service';
import {Incidencia} from '../../models/incidencia';

@Component({
  selector: 'app-buscado-incidencias',
  templateUrl: './buscado-incidencias.component.html',
  styleUrls: ['./buscado-incidencias.component.css']
})
export class BuscadoIncidenciasComponent implements OnInit  {
  public incidencias:Array<Incidencia>;
    constructor(
      private _incidenciaService:IncidenciaService,
    ) { }
  
    ngOnInit(): void {
      this._incidenciaService.getIncidencias().subscribe(
        response =>{
          if(response.status = 'success'){           
            this.incidencias = response.incidencias;
            console.log(this.incidencias);
          }       
        },
        error =>{
          console.log(<any>error);
        }
  
      );
    }
  
  }
  
