import { Component, OnInit } from '@angular/core';
import {Route,ActivatedRoute,Params, Router} from '@angular/router';
import { Incidencia } from 'src/app/models/incidencia';
import { User } from 'src/app/models/user';
import {IncidenciaService} from '../../services/incidencia.service';

@Component({
  selector: 'app-buscador-incidencias-nombre',
  templateUrl: './buscador-incidencias-nombre.component.html',
  styleUrls: ['./buscador-incidencias-nombre.component.css'],
  providers:[IncidenciaService]
})
export class BuscadorIncidenciasNombreComponent implements OnInit {
  public title: string;
  public incidencia: Incidencia;
  public user:User;
  public incidencias:Array<Incidencia>;

  constructor(
    private _router : Router,
    private _route:ActivatedRoute,
    private _incidenciaService:IncidenciaService
  ) { 

    this.title = 'Buscador de incidencias por nombre';
    this.user = new User(1,'ROLE_USER','','','','','');
  
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("holaa");
    this._incidenciaService.getIncidenciasNombre(this.user).subscribe(
      response =>{        
        if(response.status = 'success'){                 
          this.incidencias = response.incidencia;     
          console.log(this.incidencias);
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
