import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SelectionConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-selection-confirmation',
  templateUrl: 'selection-confirmation.html',
})
export class SelectionConfirmationPage {
  private selectionTags = ['Equipment'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionConfirmationPage');
  }

  private homePage(){
    this.navCtrl.push(HomePage);
  }

}
