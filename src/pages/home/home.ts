import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams,App} from 'ionic-angular';
import { FormControl } from '@angular/forms';

import { CredentialPage } from '../credential/credential'; 
import { HttpModule } from '../../../node_modules/@angular/http';

import { SelectionConfirmationPage } from '../selection-confirmation/selection-confirmation';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime';

import { SearchDataProvider } from '../../providers/search-data/search-data';

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
  searchQuery:string='';
  items:any;
  isSearchOpened=false;
  industryInformation:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App, private http:Http,private searchDataList:SearchDataProvider) {
    let localData = this.http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.industryInformation = data;
    });

 
  }

  ionViewDidLoad() {
    //this.setFilteredItems();
    //this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      //this.searching=false;
     // this.setFilteredItems();
    //});
    console.log('ionViewDidLoad HomePage');
  }

  public logout(){
    this.app.getRootNav().setRoot(CredentialPage);
  }
  private credentialLoginPage(){
    this.navCtrl.push(CredentialPage);
  }

  toggleSection(i) {
    this.industryInformation[i].open = !this.industryInformation[i].open;
  }
 
  toggleItem(i, j) {
    this.industryInformation[i].children[j].open = !this.industryInformation[i].children[j].open;
  }

  private selectionPage(){
    this.navCtrl.push(SelectionConfirmationPage);
  }
  // private onSearchIndustry(event ){
  //   //console.log(event.target.value +"Seach ")
  //   this.searching=false;
  // }

  private onSearchIndustry() {
    this.items = this.searchDataList.filterItems(this.searchQuery);
}
 private doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  let localData = this.http.get('assets/information.json').map(res => res.json().items);
  localData.subscribe(data => {
    this.industryInformation = data;
    refresher.complete();
  });
}
  

}
