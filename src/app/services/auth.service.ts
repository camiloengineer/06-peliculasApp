import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, 
    private router : Router, 
    private db : AngularFirestore,
    private toastCtrl: ToastController) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => {
        this.presentToast('Usuario o clave no válidos')
      });
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  logout(){
    this.AFauth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

  register(email : string, password : string, nombre : string, fechaNacimiento : string, sexo : string){

    return new Promise ((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then( res =>{
        const id = res.user.uid;
          this.db.collection('usuarios').doc(id).set({
            id : id,
            nombre : nombre,
            fechaNacimiento : fechaNacimiento,
            sexo : sexo
          })
        
         resolve(res)
      }).catch( 
        err => {
          this.presentToast('Los datos ingresados no son válidos')
        })
    })
  }
}
