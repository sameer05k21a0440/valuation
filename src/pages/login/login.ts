import { Component } from '@angular/core';
import { NavController,NavParams,ToastController  } from 'ionic-angular';

import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { MenuTabPage } from '../menu-tab/menu-tab';

import * as firebase  from 'firebase';
import {Firebase} from '@ionic-native/firebase';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  countryCode:any ="cn";
  phoneNumber:number;
  verificationCode:number;
  verificationId:any;
  rememberLogin:boolean;
  private loginFormGroup:FormGroup;
  rootMenuPage:any = MenuTabPage;

  constructor(public navCtrl: NavController,public navParams: NavParams,public toast:ToastController,public firebase: Firebase,private formBuilder: FormBuilder ) {

    this.loginFormGroup=this.formBuilder.group({
      telNumber:new FormControl('',Validators.compose([Validators.required])),
      verifyCode:new FormControl('',Validators.compose([Validators.required]))
    });

  }

  sendLoginCode(phoneNumber:number){
  if(String(this.phoneNumber) !="undefined"){
  //getVerificationID  verifyPhoneNumber
  alert("Before Send "+91+this.phoneNumber);
  (<any>window).FirebasePlugin.verifyPhoneNumber(91+this.phoneNumber,60,(credential)=>{
      alert("SMS SENT Successfully"+91+this.phoneNumber);
      console.log(credential);
      this.verificationId=credential.verificationId;
  },function(error){
    const toast=this.toast.create({
      message: 'Text Msg was not Send',
      duration:3000
    });
    toast.present();
  });
     }else{
        const  toast=this.toast.create({
        message: 'Please enter mobile number',
        duration:3000
      });
     toast.present();
     }
  }

  public  forgetPassword(){
    alert("welcome forget page");
  }

  public signUp(){
    alert("Welcome Register");
    
  }
  public HomePage(){
    alert("Welcome HOME"+this.loginFormGroup.value);
    this.navCtrl.push(this.rootMenuPage);
    let signInCredential =firebase.auth.PhoneAuthProvider.credential(this.verificationId,String(this.verificationCode));
    firebase.auth().signInWithCredential(signInCredential).then((info)=>{
       console.log("Successully Send Message"+info) 
     },function (error){
      console.log("Error On Credentials"+error);
     });
    
    
  }

}
