import { Component,ViewChild  } from '@angular/core';
import { NavController, NavParams,Nav  } from 'ionic-angular';

import { MenuTabPage } from '../menu-tab/menu-tab';
import { AboutPage } from  '../../pages/about/about';
import { ContactPage } from '../../pages/contact/contact';
import { ProfilePage } from '../../pages/profile/profile';
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
   @ViewChild(Nav) navany
    
   pages:Array<{title:any , componantPage:any,index:number,icon:string}>;
   titleMenu:string;

  //  pages: PageInterface[] = [
  //   { title: 'Home', pageName: 'Home', Component: 'HomePage', index: 0, icon: 'home' },
  //   { title: 'Contact', pageName: 'Contact', Component: 'ContactPage', index: 1, icon: 'contacts' } 
  // ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages =[
              {title:'about', componantPage:AboutPage,index:0,icon:'information-circle'},
              {title:'contact',componantPage:ContactPage,index:0,icon:'contacts'},
              //{title:'signOut',componantPage:LagoutPage,index:0,icon:'log-out'},
              {title:'profile',componantPage:ProfilePage,index:0,icon:'person'}
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
    //let childNav = this.nav.getActiveChildNav();
   // alert(childNav);
  }

}
