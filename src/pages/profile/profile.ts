import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App ,AlertController,ToastController} from 'ionic-angular';

import {MenuPage} from '../menu/menu';

import { TranslateService } from '@ngx-translate/core';
import { CredentialPage } from '../credential/credential';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  lang:any;
  enableNotifications = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,public alertCtrl:AlertController,public translate: TranslateService,private app:App) {
    this.lang='zh';
    //this.translate.setDefaultLang('zh');
    this.translate.use('zh');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  private menuPage(){
    this.navCtrl.push(MenuPage);
  }

  private switchLanguage(){
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }

  private logOut(){
     let alert =this.alertCtrl.create({
       title :'Are you sure?',
       message:'This will log you out of this application.',
       buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.app.getRootNav().setRoot(CredentialPage);
          }}]
     });
     alert.present();
    
  }


  toggleNotifications() {
    if (this.enableNotifications) {
      alert('Notifications enabled.')
      //this.toastCtrl.create('Notifications enabled.');
    } else {
      alert('Notifications disabled.')
      //this.toastCtrl.create('Notifications disabled.');
    }
  }
}
