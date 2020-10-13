import {Component,OnInit} from '@angular/core';
import {Route,ActivatedRoute,Params, Router} from '@angular/router';
import { User } from 'src/app/models/user';
import {UserService} from '../../services/user.service';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    providers:[UserService]
})

export class LoginComponent implements OnInit{
    public title: string;
    public user : User;
    public token;
    public identity;
    public status:string;

    constructor(
        private _userService:UserService,
        private _router : Router,
        private _route:ActivatedRoute

    ){
        this.title = 'Identificate';
        this.user = new User(1,'ROLE_USER','','','','','');
    }

    ngOnInit(){

        let user = this._userService.getIdentity();
        this.logout();
    }
    onSubmit(){

        this._userService.signup(this.user).subscribe(
            respone =>{
                //token
                if(respone.status != 'error'){
                    this.status = 'success';
                    this.token = respone;
                    localStorage.setItem('token',this.token);
                    
                    //objeto usuario identificado

                    this._userService.signup(this.user,true).subscribe(
                        respone =>{
                            //usuario 
                            this.identity = respone; 
                            localStorage.setItem('identity',JSON.stringify(this.identity));

                            //redireccion
                            this._router.navigate(['/buscador']);
                        },
                        error =>{
                            console.log(<any>error);
                        }
                    )
                }else{
                    this.status = 'error';
                }

            },
            error =>{
                console.log(<any>error);
            }
        )


    }

    logout(){
        this._route.params.subscribe(
            params => {
                let logout = +params['sure'] ;
                if(logout==1){
                    localStorage.removeItem('identity');
                    localStorage.removeItem('token');

                    this.identity = null;
                    this.token = null;

                    //redireccion
                    this._router.navigate(['']);

                }
            }
        );
    }
}