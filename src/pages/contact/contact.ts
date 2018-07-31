import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuPage } from '../../pages/menu/menu';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  private menuPage(){
    this.navCtrl.push(MenuPage);
  }

}
