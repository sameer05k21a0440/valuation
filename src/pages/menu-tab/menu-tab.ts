import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { StockDetailsPage } from '../stock-details/stock-details';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the MenuTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  templateUrl: 'menu-tab.html'
})
export class MenuTabPage {

  homeRoot = HomePage
  aboutRoot = AboutPage
  stockDetailsRoot=StockDetailsPage
  contactsRoot = ContactPage
  profileRoot=ProfilePage


  constructor() {}

}
