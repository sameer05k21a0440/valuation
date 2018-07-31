import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { AboutPage } from '../about/about';


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

  private menuPage(){
    this.navCtrl.push(MenuPage);
  }

  private gotoNext(){
    this.navCtrl.push(AboutPage);
  }

}
