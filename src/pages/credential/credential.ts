import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { DomSanitizer  } from '@angular/platform-browser';

import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import {regexValidators} from '../validators/validator';

import { RegisterPage } from '../register/register';
import { ForgetPage } from '../forget/forget';
import { MenuTabPage } from '../menu-tab/menu-tab';

import * as $ from 'jquery'
import { HomePage } from '../home/home';


/**
 * Generated class for the CredentialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-credential',
  templateUrl: 'credential.html',
})
export class CredentialPage {
  UserPage:string ="UserLogin";
  private userLoginFormGroup:FormGroup;
  private phoneLoginFormGroup:FormGroup;
  public type = 'password';
  public showPass = false;
  public validPassword=false;
  public color='red';
  public showOTP='SEND-OTP'
  public unlockOTP:boolean=false;
  public resultUnlock:any;
  public verificationCode:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,private alertCtrl: AlertController,private sanitized: DomSanitizer) {
    this.userLoginFormGroup=this.formBuilder.group({
      userName:new FormControl('',Validators.compose([Validators.required])),
      password:new FormControl('',Validators.compose([Validators.pattern(regexValidators.password), Validators.required]
    ))
    });
    this.phoneLoginFormGroup=this.formBuilder.group({
      telNumber:new FormControl('',Validators.compose([Validators.required])),
      verifyCode:new FormControl('',Validators.compose([Validators.required])),
      unlockOTP:new FormControl('',Validators.compose([Validators.required]))
    });

    this.handleSwitchOTP();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CredentialPage');
  }
  private showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  private rememberPassword(){
    this.validPassword=!this.validPassword;
    if(this.validPassword){
      this.color='dark';
    }else{
      this.color='red';
    }
  }

  private forgetPage(){
   this.navCtrl.push(ForgetPage);
  }
  private registerPage(){
    this.navCtrl.push(RegisterPage);
  }


  private _htmlProperty: string = "<p><span name=\"checkmark\"style=\"display:block;font-family:Ionicons;font-size: 20px;color:danger;position:center;\"class=\"icon icon-ios ion-md-checkmark\"></span></p>";
  public htmlProperty() {
    return this.sanitized.bypassSecurityTrustHtml(this._htmlProperty);
  }

  private userSubmit(){
    let alert = this.alertCtrl.create({
      message: <any> this.htmlProperty(),
      subTitle:"Login Successful" ,
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(HomePage);
  }
  private phoneSubmit(){


  }
  
private handleSwitchOTP(){
//switch-input
   this.resultUnlock = $('.switch-input').is(':checked')?'SEND-OTP':'OFF';
      if(this.resultUnlock =='SEND-OTP'){
        this.unlockOTP = !this.unlockOTP;
      }else if(this.resultUnlock =='OFF'){
        this.unlockOTP=false;
      }
}

}
