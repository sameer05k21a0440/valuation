import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';

import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { MenuTabPage } from '../menu-tab/menu-tab';
import { RegisterPage } from '../register/register';

import {regexValidators} from '../validators/validator';
 

/**
 * Generated class for the UserLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLoginPage {
  private userLoginFormGroup:FormGroup;
  rootMenuPage:any = MenuTabPage;
  register:any=RegisterPage;
  constructor(private events:Events,public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    this.userLoginFormGroup=this.formBuilder.group({
      userName:new FormControl('',Validators.compose([Validators.required])),
      password:new FormControl('',Validators.compose([Validators.pattern(regexValidators.password), Validators.required]
    ))
    });    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLoginPage');
  }

  private userSubmit(){
    this.events.publish('MenuTabPage');
  //    alert("User Submit Call Func");
    //this.events.publish('RegisterPage');
    //this.navCtrl.push(this.rootMenuPage);
  }

  private registerPage(){
      this.events.publish('RegisterPage');
     
  }

}
