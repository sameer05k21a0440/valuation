import { Component } from '@angular/core';
import { Platform,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserTabsPage } from '../pages/user-tab/user-tabs';
import { RegisterPage  } from '../pages/register/register';
import { MenuTabPage } from '../pages/menu-tab/menu-tab';

import { CredentialPage } from '../pages/credential/credential';

import { SelectionConfirmationPage } from '../pages/selection-confirmation/selection-confirmation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CredentialPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private events:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    //this.initEvents();
  }

//   private initEvents(){
//     this.events.subscribe('RegisterPage',()=>{
//      this.rootPage=RegisterPage;
//      this.rootPage=MenuTabPage;
//     });
//     this.events.subscribe('MenuTabPage',()=>{
//       this.rootPage=MenuTabPage;
//      });

//  }
}
