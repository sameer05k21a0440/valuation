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
import { Observable } from 'rxjs/Rx';

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
  data:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App, private http:Http,private searchDataList:SearchDataProvider) {
    this.doRefresh(0);
    this.data = this.http.get('assets/information.json').map(res => res.json().items);
    this.data.subscribe(data => {
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

  private onSearchIndustry( ) {
    this.industryInformation=this.searchDataList.filterItems(this.searchQuery);
}
 private doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  this.data= this.http.get('assets/information.json').map(res => res.json().items);
  this.data.subscribe(data => {
    this.industryInformation = data;
    if(refresher!=0)
    refresher.complete();
  });
}


}
