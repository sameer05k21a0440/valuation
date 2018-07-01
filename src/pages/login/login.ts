import { Component } from '@angular/core';
import { NavController,ToastController,NavParams  } from 'ionic-angular';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SMS } from '@ionic-native/sms';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  countryCode:string ="cn";
  phoneNumber:number;
  private loginFormGroup:FormGroup;
  rootPage:any = TabsPage;
  constructor(public navCtrl: NavController,public navParams: NavParams,private toast:ToastController,private sms: SMS,private formBuilder: FormBuilder,private tabs: TabsPage ) {

    this.loginFormGroup=this.formBuilder.group({
      telNumber : ['',Validators.required],
      verificationCode:['',Validators.required]

    });

  }

  async sendLoginCode(){
    try{
       //CONFIGURATION
       var options = {
        replaceLineBreaks: true, // true to replace \n by a new line, false by default
        android: {
            intent: ''  // send SMS with the native android SMS messaging  INTENT
            //intent: '' // send SMS without open any other app
        }
    }
     await this.sms.send("+919542615224",'Hi Welcome',options);
     alert("wel"+options);

     const toast=this.toast.create({
       message: 'Text Was Send',
       duration:3000
     });
     toast.present();

    }catch(err){
      alert(JSON.stringify(err)+"error"+this.countryCode+this.phoneNumber)
       const toast=this.toast.create({
        message:'Text was not Send',
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
    alert("Welcome HOME");
    this.navCtrl.push(this.rootPage);
    
  }

}
