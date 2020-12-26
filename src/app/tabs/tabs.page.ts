import { Component } from '@angular/core';
import { AuthService } from "./../services/auth.service";
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public authservice : AuthService, 
    public actionSheetController: ActionSheetController
  ) {}

  Onlogout(
  ){
    this.authservice.logout();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '¿Realmente desea cerrar sesión?',
      buttons: [{
        text: 'Cerrar Sesión',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          
          this.Onlogout()

        },
      }]
    });
    await actionSheet.present();
  }

}
