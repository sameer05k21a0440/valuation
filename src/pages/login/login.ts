import { Component } from '@angular/core';
import { NavController,ToastController,NavParams  } from 'ionic-angular';

import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { SMS } from '@ionic-native/sms';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  countryCode:string ="cn";
  phoneNumber:number;
  verificationCode:number;
  private loginFormGroup:FormGroup;
  rootPage:any = TabsPage;

  constructor(public navCtrl: NavController,public navParams: NavParams,private toast:ToastController,private sms: SMS,private formBuilder: FormBuilder ) {

    this.loginFormGroup=this.formBuilder.group({
      telNumber:new FormControl('',Validators.compose([Validators.required])),
      verifyCode:new FormControl('',Validators.compose([Validators.required]))
    });

  }
  onChangeCountryCode(selectedValue){
    console.info("Selected:",selectedValue);
    alert(selectedValue);
  }

      async sendLoginCode(){
        try{
          
    if(String(this.phoneNumber)!='' && String(this.phoneNumber)!='undefined'  && String(this.verificationCode)!=''){
    //CONFIGURATION
    var options = {
      replaceLineBreaks: true, // true to replace \n by a new line, false by default
      android: {
          intent: ''  // send SMS with the native android SMS messaging  INTENT
          //intent: '' // send SMS without open any other app
      }
    }
    //alert(String(this.countryCode+this.phoneNumber));
    await this.sms.send(this.countryCode+String(+91+this.phoneNumber),'Hi Welcome',options);
    alert("wel"+options);

    const toast=this.toast.create({
    message: 'Text Was Send',
    duration:3000
    });
    toast.present();
    }else{
      alert(String(this.countryCode+this.phoneNumber)+"LLLL");
      const toast=this.toast.create({
        message: 'Please Enter Mobile & OTP Code',
        duration:3000
      });
      toast.present();
    }
    }catch(err){
      alert(JSON.stringify(err)+"error"+this.countryCode+this.phoneNumber)
       const toast=this.toast.create({
        message:'Text was not Send',
        duration:3000
       });
       toast.present();
       
    }}

  public  forgetPassword(){
    alert("welcome forget page");
  }

  public signUp(){
    alert("Welcome Register");
    
  }
  public HomePage(){
    alert("Welcome HOME"+this.loginFormGroup.value);

    this.navCtrl.push(this.rootPage);
    
  }

}
