import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {ReactiveFormsModule} from '@angular/forms';


import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {LoginPage} from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {Firebase} from '@ionic-native/firebase';
import { SearchDataProvider } from '../providers/search-data/search-data';

import * as firebase  from 'firebase';

firebase.initializeApp({apiKey: "AIzaSyBcJ_MiFW_shD8kHqgoUOL6O2Lf1ERRmnQ",
authDomain: "valuation-a2264.firebaseapp.com",
databaseURL: "https://valuation-a2264.firebaseio.com",
projectId: "valuation-a2264",
storageBucket: "valuation-a2264.appspot.com",
messagingSenderId: "759257827636"});


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TabsPage,
    SearchDataProvider
  ]
})
export class AppModule {}
