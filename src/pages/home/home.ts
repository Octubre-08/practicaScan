import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Platform, ToastController } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
  public toastCtrl: ToastController, private platform:Platform, private _historialProvider:HistorialProvider) {

  }

  scan(){
    console.log("Realizando Scanner....");

    if(!this.platform.is('cordova')){
      this._historialProvider.agregar_historial("http://google.com");

    }
    
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
         this.presentToast('Error: '+err);
     });
  }

  presentToast(mensaje:string) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
