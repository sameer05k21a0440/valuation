import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

import { CredentialPage } from '../../pages/credential/credential';
/**
 * Generated class for the LagoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lagout',
  templateUrl: 'lagout.html',
})
export class LagoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
    
  }

  ionViewDidLoad() {
    this.app.getRootNav().setRoot(CredentialPage);
    console.log('ionViewDidLoad LagoutPage');
  }

}
