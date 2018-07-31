import { Component,ViewChild  } from '@angular/core';
import { NavController, NavParams,Nav  } from 'ionic-angular';

import { MenuTabPage } from '../menu-tab/menu-tab';
import { AboutPage } from  '../../pages/about/about';
import { ContactPage } from '../../pages/contact/contact';
import { SettingsPage } from '../../pages/settings/settings';
import { LagoutPage } from '../../pages/lagout/lagout';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// export interface PageInterface {
//   title: string;
//   pageName: string;
//   Component?: any;
//   index?: number;
//   icon: string;
// }


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})


export class MenuPage {
// Basic root for our content view
   rootPage:any =MenuTabPage  
   // Reference to the app's root nav
   @ViewChild(Nav) nav: Nav;
    
   pages:Array<{title:string , componantPage:any,index:number,icon:string}>;

  //  pages: PageInterface[] = [
  //   { title: 'Home', pageName: 'Home', Component: 'HomePage', index: 0, icon: 'home' },
  //   { title: 'Contact', pageName: 'Contact', Component: 'ContactPage', index: 1, icon: 'contacts' } 
  // ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.pages =[
              {title:'About',componantPage:AboutPage,index:0,icon:'information-circle'},
              {title:'Contact',componantPage:ContactPage,index:0,icon:'contacts'},
              {title:'Sign out',componantPage:LagoutPage,index:0,icon:'log-out'},
              {title:'Settings',componantPage:SettingsPage,index:0,icon:'settings'},
              

          ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  private openPage(page){
    this.navCtrl.setRoot(page.componantPage);
  }
  private isActive(page){
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
   // alert(childNav);
  }

}
