import { Component,Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController} from 'ionic-angular';
import { DomSanitizer  } from '@angular/platform-browser';

import { FormBuilder, FormGroup,FormControl,Validators, MaxLengthValidator } from '@angular/forms';
import { regexValidators } from '../validators/validator';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

import * as firebase  from 'firebase';
import {Firebase} from '@ionic-native/firebase';

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
  countryCode:any ="cn";
  phoneNumber:number;
  verificationCode:number;
  verificationId:any;
  public type = 'password';
  public showPass = false;
  public validPassword=false;
  public color='coral';
  public showOTP='SEND-OTP'
  public unlockOTP:boolean=false;
  public resultUnlock:any;
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,private alertCtrl: AlertController,private sanitized: DomSanitizer,private toast:ToastController) {
    this.userLoginFormGroup=this.formBuilder.group({
      userName:new FormControl('',Validators.compose([Validators.required])),
      password:new FormControl('',Validators.compose([Validators.pattern(regexValidators.password), Validators.required]
    ))
    });
    this.phoneLoginFormGroup=this.formBuilder.group({
      phoneNumber:new FormControl('',Validators.compose([Validators.required])),
      verificationCode:new FormControl('',Validators.compose([Validators.required])),
      countryCode:new FormControl('',Validators.compose([Validators.required]))
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
      this.color='coral';
    }
  }

  private forgetPage(){
   this.navCtrl.push(ForgetPage);
  }
  private registerPage(){
    this.navCtrl.push(RegisterPage);
  }


  private _htmlProperty: string ="<p><span style=\"background:url(../../assets/imgs/login-alert.png)repeat 0 0;width:100%;height:auto;background-repeat: no-repeat, repeat;\"></span> </p>"; 
  public htmlProperty() {
    return this.sanitized.bypassSecurityTrustHtml(this._htmlProperty);
  }

  private userSubmit(){
    let alert = this.alertCtrl.create({
      title: '<h3>Login Successfully!</h3>',
      //message: <any> this.htmlProperty(),
      message:'<img style="width:50%;height:10px; position:relative;"  src="assets/imgs/login-alert.png" alt="logo"/>',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        }
      ]
      //subTitle:"Login Successful" ,
      //buttons: ['OK']
    });
    alert.present();
    //this.navCtrl.push(HomePage);
  }
  private phoneSubmit(){
    let alert = this.alertCtrl.create({
      title: '<h3>Login Successfully!</h3>',
      //message: <any> this.htmlProperty(),
      message:'<img style="width:50%;height:10px; position:relative;"  src="../../assets/imgs/login-alert.png" alt="logo"/>',
      buttons: [
        {
          text: 'Cancel'
       },
        {
          text: 'OK',
          handler: () => {
            let signInCredential =firebase.auth.PhoneAuthProvider.credential(this.verificationId,String(this.verificationCode));
            firebase.auth().signInWithCredential(signInCredential).then((info)=>{
              this.navCtrl.push(HomePage);
            },function (error){
              console.log("Error On Credentials"+error);
            });
          }
        }
      ]
    });
    alert.present();

  }
  
private handleSwitchOTP(phoneNumber:number){
  var maxSecTime=60;
  var setIntrvl;
  this.resultUnlock = $('.switch-input').is(':checked')?'SEND-OTP':'OFF';
  if(String(phoneNumber) !="undefined" && this.resultUnlock=='SEND-OTP'){
    this.unlockOTP = !this.unlockOTP;
     // Update the count down every 1 second
     setIntrvl = setInterval(function() {
       // If the count down is finished, write some text 
       if (maxSecTime == 0) {
           clearInterval(setIntrvl);
           document.getElementById("displayDiv").innerHTML = "EXPIRED";
          }else if(maxSecTime>0){
            document.getElementById("displayDiv").innerHTML = maxSecTime +"S" ;
            maxSecTime--;
        //     (<any>window).FirebasePlugin.verifyPhoneNumber(86+phoneNumber,60,(credential)=>{
        //     this.verificationId=credential.verificationId;
        //   },function(error){
        //     const toast=this.toast.create({
        //       message: 'Text Msg was not Send',
        //       duration:3000
        //   });
        //   toast.present();
        // });
      }
     },1000); //1 Sec
  }else if(this.resultUnlock=='SEND-OTP'&&  String(phoneNumber)=="undefined"){
      const  toast=this.toast.create({
      message: 'Please enter mobile number',
      duration:3000
    });
     toast.present();
  }else if(this.resultUnlock=='OFF' &&  String(phoneNumber)!="undefined"){
    
   }

}
}
