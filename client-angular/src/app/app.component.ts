import { Component, OnInit, DoCheck } from '@angular/core';
import {UserService} from './services/user.service';
import {IncidenciaService} from './services/incidencia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,IncidenciaService]
})
export class AppComponent implements OnInit,DoCheck{
  public identity;
  public token;
  constructor(
    private _userService:UserService,
    private _incidenciaService:IncidenciaService
  ){

    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();

  }
  ngOnInit(){
    
  }
  
  ngDoCheck(){
    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();

  }

}
