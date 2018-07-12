import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import {regexValidators} from '../validators/validator';

import { CredentialPage  } from '../credential/credential';
import { MenuTabPage } from '../menu-tab/menu-tab';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  phoneNumber:number;
  verificationCode:number;
  public type = 'password';
  public showPass = false;
  private registerFormGroup:FormGroup;
  private tags = ['Enterprise', 'Organization', 'Personal'];
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    this.registerFormGroup=this.formBuilder.group({
      telNumber:new FormControl('',Validators.compose([Validators.required])),
      verificationCode:new FormControl('',Validators.compose([Validators.required])),
      password:new FormControl('',Validators.compose([Validators.pattern(regexValidators.password), Validators.required])),
      tags: new FormControl('', [])
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  private showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
  private credentialLoginPage(){
    this.navCtrl.pop();
  }

  private HomePage(){
   this.navCtrl.push(MenuTabPage);  
  }

  private onChange(val){
    console.log(this.tags)
  }
}
