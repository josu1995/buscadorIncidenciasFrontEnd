import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { User } from 'src/app/models/user';
import {Observable} from 'rxjs';


@Component({
    selector:'default',
    templateUrl:'./default.component.html'
    

})

export class DefaultComponent implements OnInit{
    public title: string;
    public user: User;
    public status: string;

    constructor(
        ){
        this.title = 'Buscador de incidencias';
    }

    ngOnInit(){
        console.log('Default.component cargado');
    }

}