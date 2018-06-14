//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScanData } from '../../modules/scan-data.model';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Injectable()
export class HistorialProvider {
  private _historial:ScanData[] = [];

  constructor(private iab:InAppBrowser) {
    console.log('Hello HistorialProvider Provider');

  }
    abrir_scan(index:number){
        let ScanData = this._historial[index];
        console.log(ScanData);

        switch(ScanData.tipo){
          case "http":
          this.iab.create(ScanData.info, "_system");
          break

          default:
          console.error("Tipo no soportado")
        }
    }

    agregar_historial(texto:string){
      let data = new ScanData(texto);
      this._historial.unshift(data);
      console.log(this._historial);
    }

    cargar_historial(){
      return this._historial;
      
    }
  }


