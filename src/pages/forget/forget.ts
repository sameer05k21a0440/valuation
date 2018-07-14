import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

import {regexValidators} from '../validators/validator';
/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {
  public type = 'password';
  public showPass = false;
  private forgetFormGroup:FormGroup;
  //Captcha 
  private captcha_alpha = ['A', 'B', 'C','D', 'E', 'F','G', 'H', 'I','J', 'K', 'L','M', 'N', 'O','P', 'Q', 'R','S', 'T', 'U','V', 'W', 'X','Y','Z'];
  
  private captcha1 =this.captcha_alpha[Math.floor(Math.random()*62)];
  private captcha2 =this.captcha_alpha[Math.floor(Math.random()*62)];
  private captcha3 =this.captcha_alpha[Math.floor(Math.random()*62)];
  private captcha4 =this.captcha_alpha[Math.floor(Math.random()*62)];

  private captcha =this.captcha1+this.captcha2+this.captcha3+this.captcha4;
  




  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    this.forgetFormGroup=this.formBuilder.group({
      telNumber:new FormControl('',Validators.compose([Validators.required])),
      verificationCode:new FormControl('',Validators.compose([Validators.required])),
      password:new FormControl('',Validators.compose([Validators.pattern(regexValidators.password), Validators.required])),
      typeCaptcha:new FormControl('',Validators.compose([Validators.required]))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
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

}
