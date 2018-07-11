import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {ReactiveFormsModule} from '@angular/forms';


import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { UserTabsPage } from '../pages/user-tab/user-tabs';
import { MenuTabPage } from '../pages/menu-tab/menu-tab';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
 
import { CredentialPage } from  '../pages/credential/credential';

import {LoginPage} from '../pages/login/login';
import {UserLoginPage} from '../pages/user-login/user-login';
import { RegisterPage } from '../pages/register/register'; 

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
    CredentialPage,
    UserTabsPage,
    LoginPage,
    UserLoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    MenuTabPage,
    RegisterPage
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
    CredentialPage,
    UserTabsPage,
    UserLoginPage,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    MenuTabPage,
    RegisterPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuTabPage,
    SearchDataProvider
  ]
})
export class AppModule {}
