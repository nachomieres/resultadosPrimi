import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { ParserPrimiProvider } from '../../providers/parser-primi/parser-primi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public xmlItems : any;
   
   constructor(public navCtrl: NavController, public http   : Http, private parserPrimi: ParserPrimiProvider) 
   {
    
   }

   ionViewWillEnter()
   {
      this.cargaDatos ();
   }

   cargaDatos () {
    this.parserPrimi.loadXML ().subscribe (data => {
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
