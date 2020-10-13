import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global';
import { Observable } from 'rxjs';



@Injectable()
export class IncidenciaService{
    public url:string;

    constructor(
        public _http: HttpClient,
    
    ){
        this.url = GLOBAL.url
    }

    pruebas(){
        return "Hola mundo";
    }
    
    getIncidencias():Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.get(this.url + 'incidencia',{headers:headers});
    }

    getIncidenciasFecha(incidencia):Observable<any>{
        let json = JSON.stringify(incidencia);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        
        return this._http.post(this.url+'incidenciaFecha',params,{headers:headers});
    }

    getIncidenciasNombre(user):Observable<any>{
        let json = JSON.stringify(user);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        
        return this._http.post(this.url+'incidenciaUsuario',params,{headers:headers});
    }
}