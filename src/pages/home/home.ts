import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

import { CredentialPage } from '../credential/credential'; 
import { HttpModule } from '../../../node_modules/@angular/http';

import 'rxjs/add/operator/map'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  industryInformation:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App, private http:Http) {
    let localData = this.http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.industryInformation = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public logout(){
    this.app.getRootNav().setRoot(CredentialPage);
  }
  private credentialLoginPage(){
    this.navCtrl.pop();
  }

  toggleSection(i) {
    this.industryInformation[i].open = !this.industryInformation[i].open;
  }
 
  toggleItem(i, j) {
    this.industryInformation[i].children[j].open = !this.industryInformation[i].children[j].open;
  }

}
