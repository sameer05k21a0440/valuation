import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserLoginPage} from '../user-login/user-login';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-user-tabs',
  templateUrl: 'user-tabs.html'
})
export class UserTabsPage {

  tab1Root = UserLoginPage;
  tab2Root = LoginPage;
  constructor() {

  }
}
