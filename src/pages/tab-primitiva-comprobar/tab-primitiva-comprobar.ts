import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabPrimitivaComprobarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-primitiva-comprobar',
  templateUrl: 'tab-primitiva-comprobar.html',
})
export class TabPrimitivaComprobarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPrimitivaComprobarPage');
  }

  aHome () {
    this.navCtrl.setRoot(HomePage);
  }

}
