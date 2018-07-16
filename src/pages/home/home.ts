import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

import { CredentialPage } from '../credential/credential'; 

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public logout(){
    this.app.getRootNav().setRoot(CredentialPage);
  }

}
