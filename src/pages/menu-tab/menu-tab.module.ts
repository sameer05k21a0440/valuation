import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTabPage } from './menu-tab';

@NgModule({
  declarations: [
    MenuTabPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuTabPage),
  ]
})
export class MenuTabPageModule {}
