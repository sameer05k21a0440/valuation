import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { DomSanitizer  } from '@angular/platform-browser';

import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import {regexValidators} from '../validators/validator';

import { RegisterPage } from '../register/register';
import { ForgetPage } from '../forget/forget';
import { MenuTabPage } from '../menu-tab/menu-tab';


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
  public swipe: number = 0;
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

  private showUnlockOTP(otpValue){
    var isChecked = otpValue.is(':checked');
    alert("onchange"+isChecked);
  } 
  private forgetPage(){
   this.navCtrl.push(ForgetPage);
  }
  private registerPage(){
   this.navCtrl.push(RegisterPage);
  }


  private _htmlProperty: string = "<p><span name=\"checkmark\"style=\"display:block;font-family:Ionicons;font-size: 20px;color:danger;position:center;\"class=\"icon icon-md ion-md-checkmark\"></span></p>";
  public htmlProperty() {
    return this.sanitized.bypassSecurityTrustHtml(this._htmlProperty);
  }

  private userSubmit(){
    let alert = this.alertCtrl.create({
      message: <any> this.htmlProperty(),
      title:"Login Successful"   
    });
    alert.present();
    this.navCtrl.push(MenuTabPage);
  }
  private phoneSubmit(){

  }
  


}
