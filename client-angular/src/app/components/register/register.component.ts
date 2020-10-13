import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { User } from 'src/app/models/user';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';

@Component({
    selector:'register',
    templateUrl:'./register.component.html',
    providers:[UserService]
})

export class RegisterComponent implements OnInit{
    public title: string;
    public user: User;
    public status: string;
    public message:string;

    constructor(
        private _userService:UserService    ){
        this.title = 'Registrate';
        this.user = new User(1,'ROLE_USER','','','','','');
    }

    ngOnInit(){
        console.log('Register.component cargado');
    }

    onSubmit(form){
       this._userService.register(this.user).subscribe(
        response => {
           console.log(this.user);
            if(response.status == 'success'){
                //vaciar formulario
                this.status = response.status;
                
                this.user = new User(1,'ROLE_USER','','','','',''); 
                form.reset();
               
            }else{
                this.status = 'error';
                this.message = response.message;
            }
        },
        error =>{
            console.log(<any>error);
        }
       );
    }
}