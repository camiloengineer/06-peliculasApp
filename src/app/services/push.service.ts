import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(
    private oneSignal: OneSignal
  ) { }

  configuracionInicial(){
    this.oneSignal.startInit('0f1d6b0e-6c9b-4b43-9318-fdcdadc48c89', '417757475409');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    
    this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
     // do something when notification is received
     console.log('notificación recibida', noti);
    });
    
    this.oneSignal.handleNotificationOpened().subscribe(( noti ) => {
      // do something when a notification is opened
      console.log('notificación abierta', noti);
    });
    
    this.oneSignal.endInit();
  }
}
