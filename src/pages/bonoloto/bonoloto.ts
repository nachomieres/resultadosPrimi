import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ParserPrimiProvider } from '../../providers/parser-primi/parser-primi';
@IonicPage()
@Component({
  selector: 'page-bonoloto',
  templateUrl: 'bonoloto.html',
})
export class BonolotoPage {
  public xmlItems : any;
  public logo: string;
   
   constructor(public navCtrl: NavController, public http   : Http, private parserPrimi: ParserPrimiProvider) 
   {}
   ionViewWillEnter()
   {
      this.cargaDatos ();
   }

   cargaDatos () {
    this.parserPrimi.loadXML ('bonoloto').subscribe (data => {
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
}