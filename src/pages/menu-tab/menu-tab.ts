import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MenuTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-tab',
  templateUrl: 'menu-tab.html'
})
export class MenuTabPage {

  homeRoot = 'HomePage'
  aboutRoot = 'AboutPage'
  contactsRoot = 'ContactsPage'


  constructor(public navCtrl: NavController) {}

}
