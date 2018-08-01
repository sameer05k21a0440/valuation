import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {ReactiveFormsModule} from '@angular/forms';


import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule,HttpClient   } from '@angular/common/http';
import { HttpModule } from '@angular/http';
//import { IonicStorageModule } from '@ionic/storage';



import { UserTabsPage } from '../pages/user-tab/user-tabs';
import { MenuTabPage } from '../pages/menu-tab/menu-tab';
import { MenuPage } from '../pages/menu/menu';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
 
import { CredentialPage } from  '../pages/credential/credential';

import {LoginPage} from '../pages/login/login';
import { UserLoginPage } from '../pages/user-login/user-login';
import { RegisterPage } from '../pages/register/register'; 
import { ForgetPage } from '../pages/forget/forget';
import { ProfilePage } from  '../pages/profile/profile';
import { LagoutPage } from '../pages/lagout/lagout';


import { SelectionConfirmationPage} from '../pages/selection-confirmation/selection-confirmation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonTagsInputModule } from 'ionic-tags-input';

import {Firebase} from '@ionic-native/firebase';
import { SearchDataProvider } from '../providers/search-data/search-data';

import * as firebase  from 'firebase';
import { ServiceProvider } from '../providers/service/service';

import { TranslateModule,TranslateLoader  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

firebase.initializeApp({apiKey: "AIzaSyBcJ_MiFW_shD8kHqgoUOL6O2Lf1ERRmnQ",
authDomain: "valuation-a2264.firebaseapp.com",
databaseURL: "https://valuation-a2264.firebaseio.com",
projectId: "valuation-a2264",
storageBucket: "valuation-a2264.appspot.com",
messagingSenderId: "759257827636"});


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


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
    MenuPage,
    ForgetPage,
    RegisterPage,
    LagoutPage,
    ProfilePage,
    SelectionConfirmationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    IonTagsInputModule,
   IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient ]
      }
    })
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
    MenuPage,
    ForgetPage,
    RegisterPage,
    LagoutPage,
    ProfilePage,
    SelectionConfirmationPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuPage,
    MenuTabPage,
    SearchDataProvider,
    ServiceProvider
  ]
})
export class AppModule {}
