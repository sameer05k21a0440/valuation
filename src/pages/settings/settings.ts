import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MenuPage} from '../menu/menu';

import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  lang:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public translate: TranslateService) {
    this.lang='zh';
    this.translate.setDefaultLang('zh');
    this.translate.use('zh');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  private menuPage(){
    this.navCtrl.push(MenuPage);
  }

  switchLanguage() {
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
   
  }

}
