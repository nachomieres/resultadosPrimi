import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs-primitiva',
  templateUrl: 'tabs-primitiva.html',
})
export class TabsPrimitivaPage {
  
  tabResultados: string;
  tabEscanear: string;
  tabComrpobar: string;
  
  constructor() {
    this.tabResultados = 'TabPrimitivaResultadosPage';
    this.tabEscanear = 'TabPrimitivaEscanearPage';
    this.tabComrpobar = 'TabPrimitivaComprobarPage';
  }

}
