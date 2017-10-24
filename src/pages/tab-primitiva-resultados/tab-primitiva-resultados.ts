import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ParserPrimiProvider } from '../../providers/parser-primi/parser-primi';

@IonicPage()
@Component({
  selector: 'page-tab-primitiva-resultados',
  templateUrl: 'tab-primitiva-resultados.html',
})
export class TabPrimitivaResultadosPage {

  public xmlItems : any;
  public logo: string;
   
   constructor(public navCtrl: NavController, private parserPrimi: ParserPrimiProvider) 
   {}
   ionViewWillEnter()
   {
      this.cargaDatos ();
   }

   cargaDatos () {
    this.parserPrimi.loadXML ('la-primitiva').subscribe (data => {
      this.xmlItems = data;
      console.log (data);
    });    
   }

   doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.cargaDatos ();
      refresher.complete();
    }, 2000);
  }

  aHome () {
    this.navCtrl.setRoot (HomePage);
  }
}