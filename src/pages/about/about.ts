import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { ScanData } from '../../modules/scan-data.model';




@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {

  historial:ScanData[]=[];

  constructor(public navCtrl: NavController, private _historialProvider:HistorialProvider) {
    console.log("Hello historial");


  }
  ionViewDidLoad(){
    this.historial = this._historialProvider.cargar_historial(); 
  }

}
