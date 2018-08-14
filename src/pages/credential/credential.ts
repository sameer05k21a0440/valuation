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

import { TranslateService } from '@ngx-translate/core';

import { RegisterPage } from '../register/register';
import { ForgetPage } from '../forget/forget';
import { MenuTabPage } from '../menu-tab/menu-tab';

import * as $ from 'jquery'
import { MenuPage } from '../menu/menu';


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
  countryCode:any;
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
  public customText:any;

 
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,private alertCtrl: AlertController,private translate: TranslateService,private toast:ToastController) {
    this.countryCode="cn";
    this.userLoginFormGroup=this.formBuilder.group({
      userName:new FormControl('',Validators.compose([Validators.required])),
      password:new FormControl('',Validators.compose([Validators.pattern(regexValidators.password), Validators.required]
    ))
    });
    this.phoneLoginFormGroup=this.formBuilder.group({
      phoneNumber:new FormControl('',Validators.compose([Validators.required])),
      verificationCode:new FormControl('',Validators.compose([Validators.required])),
      countryCode:new FormControl('',Validators.compose([Validators.required])),
      customText:new FormControl('',Validators.compose([Validators.required]))
      
    });
  }
  
  ionViewDidLoad() {
   this.customText=false;
   // alert(this.unlockOTP);
    // if(this.unlockOTP==false){
     //const  switchTemp:any = document.getElementById("switch-handle");
     //switchTemp[0].disabled=true;
    // }
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




  private userSubmit(){
    let userTitle :any ={};
    this.translate.get('logoutAlertCancel').subscribe(data=>{
      userTitle.cancel=data;
     });
     this.translate.get('alertOK').subscribe(data=>{
      userTitle.ok=data;
     });
    let alert = this.alertCtrl.create({
      title: '<h3>Login Successfully!</h3>',
      //message: <any> this.htmlProperty(),
      message:'<img style="width:50%;height:10px; position:relative;"  src="assets/imgs/login-alert.png" alt="logo"/>',
      buttons: [
        {
          text:userTitle.cancel
       },
        {
          text: userTitle.ok,
          handler: () => {
            this.navCtrl.setRoot(MenuPage);
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
    let phoneTitle :any ={};
    this.translate.get('logoutAlertCancel').subscribe(data=>{
      phoneTitle.cancel=data;
     });
     this.translate.get('alertOK').subscribe(data=>{
      phoneTitle.ok=data;
     });
    let alert = this.alertCtrl.create({
      title: '<h3>Login Successfully!</h3>',
      //message: <any> this.htmlProperty(),
      message:'<img style="width:50%;height:10px; position:relative;"  src="../../assets/imgs/login-alert.png" alt="logo"/>',
      buttons: [
        {
          text: phoneTitle.cancel
       },
        {
          text: phoneTitle.ok,
          handler: () => {
            let signInCredential =firebase.auth.PhoneAuthProvider.credential(this.verificationId,String(this.verificationCode));
            // sign in with the credential
            firebase.auth().signInWithCredential(signInCredential).then((info)=>{
              //// OR link to an account
              firebase.auth().currentUser.linkWithCredential(signInCredential);

              this.navCtrl.setRoot(MenuPage);
             },function (error){
               console.log("Error On Credentials"+error);
            });
          }
        }
      ]
    });
    alert.present();

  }
  
private handleSwitchOTP(phoneNumber:number,countryCode:any){
  var maxSecTime=60;
  var setIntrvl;
  this.resultUnlock = $('.switch-input').is(':checked')?'SEND-OTP':'OFF';
  alert(this.resultUnlock)
  if(String(phoneNumber) !="undefined" && this.resultUnlock=='SEND-OTP' && this.countryCode!="undefined"){
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
           // alert(String(this.countryCode) getVerificationID  verifyPhoneNumber)
            if(countryCode=='cn'){
              (<any>window).FirebasePlugin.verifyPhoneNumber('+86'+phoneNumber,60,(credential)=>{
                this.verificationId=credential.verificationId;
                console.log(this.verificationId+"verificationId")
              },function(error){
                const toast=this.toast.create({
                        message: 'Text Msg was not Send',
                        duration:3000
              });
              toast.present();
            });
          }else if(countryCode=='in'){
            (<any>window).FirebasePlugin.verifyPhoneNumber('+91'+phoneNumber,60,(credential)=>{
              this.verificationId=credential.verificationId;
            },function(error){
              const toast=this.toast.create({
                      message: 'Text Msg was not Send',
                      duration:3000
            });
            toast.present();
          });
          }else if(countryCode=='us'){
            (<any>window).FirebasePlugin.verifyPhoneNumber('+1'+phoneNumber,60,(credential)=>{
              this.verificationId=credential.verificationId;
            },function(error){
              const toast=this.toast.create({
                      message: 'Text Msg was not Send',
                      duration:3000
            });
            toast.present();
          });
          }
      }
     },1000); //1 Sec
  }else if(this.resultUnlock=='SEND-OTP'&&  String(phoneNumber)=="undefined"){
      const  toast=this.toast.create({
      message: 'Please enter mobile number',
      duration:3000
    });
     toast.present();
  }else if(this.resultUnlock=='OFF' &&  String(phoneNumber)!="undefined"){
    clearInterval(setIntrvl);
   }

}


private getSwitchChecked(phoneNumber){
  var maxSecTime=60;
  var setIntrvl;
  this.resultUnlock = $('.switch-input').is(':checked')?'SEND-OTP':'OFF';
  if(this.resultUnlock=='SEND-OTP' && String(phoneNumber) !="undefined" && this.countryCode!="undefined" ){
    //this.handleSwitchOTP(event,this.countryCode);

    this.unlockOTP = !this.unlockOTP;
    alert(phoneNumber + this.countryCode + this.resultUnlock)
     // Update the count down every 1 second
     setIntrvl = setInterval(function() {
      // Update the count down every 1 second
     // If the count down is finished, write some text 
     if (maxSecTime == 0) {
      clearInterval(setIntrvl);
      document.getElementById("displayDiv").innerHTML = "EXPIRED";
     }else if(maxSecTime>0){
       document.getElementById("displayDiv").innerHTML = maxSecTime +"S" ;
       maxSecTime--;
      // alert(String(this.countryCode) getVerificationID  verifyPhoneNumber)
       if(this.countryCode=='cn'){
         (<any>window).FirebasePlugin.verifyPhoneNumber('+86'+phoneNumber,60,(credential)=>{
           this.verificationId=credential.verificationId;
           console.log(this.verificationId+"verificationId")
         },function(error){
           const toast=this.toast.create({
                   message: 'Text Msg was not Send',
                   duration:3000
         });
         toast.present();
       });
     }else if(this.countryCode=='in'){
       (<any>window).FirebasePlugin.verifyPhoneNumber('+91'+phoneNumber,60,(credential)=>{
         this.verificationId=credential.verificationId;
       },function(error){
         const toast=this.toast.create({
                 message: 'Text Msg was not Send',
                 duration:3000
       });
       toast.present();
     });
     }else if(this.countryCode=='us'){
       (<any>window).FirebasePlugin.verifyPhoneNumber('+1'+phoneNumber,60,(credential)=>{
         this.verificationId=credential.verificationId;
       },function(error){
         const toast=this.toast.create({
                 message: 'Text Msg was not Send',
                 duration:3000
       });
       toast.present();
     });
     }  
 }
},1000); //1 Sec
}}

 
  
}