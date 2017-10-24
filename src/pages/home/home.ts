import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   
   constructor(public navCtrl: NavController) 
   {
    
   }

   ionViewWillEnter()
   {
   }

   aPrimitiva () {
     this.navCtrl.push ('TabsPrimitivaPage');
   }

   aBonoloto () {
     this.navCtrl.push ('BonolotoPage');
   }
  
}
