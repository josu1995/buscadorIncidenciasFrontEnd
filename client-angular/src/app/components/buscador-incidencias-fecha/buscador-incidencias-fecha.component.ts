import {Component,OnInit} from '@angular/core';
import {Route,ActivatedRoute,Params, Router} from '@angular/router';
import { Incidencia } from 'src/app/models/incidencia';
import {IncidenciaService} from '../../services/incidencia.service';


@Component({
  selector: 'app-buscador-incidencias-fecha',
  templateUrl: './buscador-incidencias-fecha.component.html',
  styleUrls: ['./buscador-incidencias-fecha.component.css'],
  providers:[IncidenciaService]
})
export class BuscadorIncidenciasFechaComponent implements OnInit {
  public title: string;
  public incidencia: Incidencia
  public incidencias:Array<Incidencia>;

  constructor(
    private _router : Router,
    private _route:ActivatedRoute,
    private _incidenciaService:IncidenciaService
  ) { 

    this.title = 'Buscador de incidencias por fecha';
    this.incidencia = new Incidencia(1,'','','',null,null);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._incidenciaService.getIncidenciasFecha(this.incidencia).subscribe(
      response =>{        
        if(response.status = 'success'){           
          this.incidencias = response.incidencias;
          console.log(this.incidencias);

          
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
