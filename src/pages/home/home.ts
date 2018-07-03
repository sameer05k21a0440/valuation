import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SearchDataProvider} from '../../providers/search-data/search-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items: any;

  constructor(public navCtrl: NavController, private searchDataService:SearchDataProvider) {
    //this.initializeItems();
  }

  // initializeItems() {
  //   this.items = [
  //         'Main Industry',
  //         'Secondary Industry'
  //   ];};

  setFilteredItems() {
 
    this.items = this.searchDataService.filterItems(this.searchQuery);

}

}
