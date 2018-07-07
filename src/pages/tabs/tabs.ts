import { Component } from '@angular/core';

import {UserLoginPage} from '../user-login/user-login';
import {LoginPage} from '../login/login';

@Component({
  selector: 'tab-logo',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UserLoginPage;
  tab2Root = LoginPage;
  constructor() {

  }
}
