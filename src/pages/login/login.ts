import { Component } from '@angular/core';
import { NavController,NavParams  } from 'ionic-angular';

import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

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
  rootPage:any = TabsPage;

  constructor(public navCtrl: NavController,public navParams: NavParams,public firebase: Firebase,private formBuilder: FormBuilder ) {

    this.loginFormGroup=this.formBuilder.group({
      telNumber:new FormControl('',Validators.compose([Validators.required])),
      verifyCode:new FormControl('',Validators.compose([Validators.required]))
    });

  }

  sendLoginCode(phoneNumber:number){
  if(String(this.phoneNumber) !="undefined"){
  //getVerificationID  verifyPhoneNumber
  (<any>window).FirebasePlugin.verifyPhoneNumber("+91"+phoneNumber,60,(credential)=>{
    alert("SMS SENT Successfully");
    console.log(credential);
    this.verificationId=credential.verificationId;
  },function(error){
    console.log(error);
  });
     }else{
       alert("Please enter mobile number");
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
    let signInCredential =firebase.auth.PhoneAuthProvider.credential(this.verificationId,String(this.verificationCode));
    firebase.auth().signInWithCredential(signInCredential).then((info)=>{
      console.log("Successully Send Message"+info)

      this.navCtrl.push(this.rootPage);
      
    },function (error){
      console.log("Error On Credentials"+error);
    });
    
    
  }

}
