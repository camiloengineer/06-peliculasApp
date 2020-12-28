import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../services/auth.service";
import { Router } from "@angular/router";
import { CreateUserGQL, CreateUser } from '../services/user-graphql.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  createUser: Observable<CreateUser.Mutation>;

  public email : string;
  public nombre : string;
  public fechaNacimiento : string;
  public sexo : string;
  public password : string;

  constructor(
    private auth : AuthService, 
    private router : Router,
    private createUserGQL: CreateUserGQL,
    ) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    this.auth.register(this.email, this.password,this.nombre, this.fechaNacimiento, this.sexo).then( auth => {

      //this.crearUsuarioGQL(this.email, this.nombre, this.fechaNacimiento, this.sexo)
      this.router.navigate(['login'])

    }).catch(err => console.log(err))
  }

  crearUsuarioGQL(email: string, nombre: string, fechaNacimiento: string, sexo: string) {
    this.createUserGQL
      .mutate(
        { nombre, email, fechaNacimiento, sexo },
        {
          optimisticResponse: {
            CreateUser: {
              nombre, email, fechaNacimiento, sexo
            },
          },
        },
      )
      .pipe(tap(data => console.log(data.data)))
      .subscribe();
  }

}
