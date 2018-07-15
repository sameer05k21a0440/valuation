import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

import {regexValidators} from '../validators/validator';

import * as math from 'mathjs'; // don't named as Math, this will conflict with Math in JS
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
  public forgetFormGroup:FormGroup;
  verificationId:any;
  public captcha_alpha:string[];
  public  captcha:string;
  public typeCaptcha:string;


  //Captcha 
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,private toast: ToastController) {
    this.forgetFormGroup=this.formBuilder.group({
      telNumber:new FormControl('',Validators.compose([Validators.required])),
      verificationCode:new FormControl('',Validators.compose([Validators.required])),
      password:new FormControl('',Validators.compose([Validators.pattern(regexValidators.password), Validators.required])),
      typeCaptcha:new FormControl('',Validators.compose([Validators.required])),
      captcha:new FormControl('s',Validators.compose([Validators.required]))
    });

    this.captcha_alpha=['A', 'B', 'C','D', 'E', 'F','G', 'H', 'I','J', 'K', 'L','M', 'N', 'O','P', 'Q', 'R','S', 'T', 'U','V', 'W', 'X','Y','Z'];  
    let captcha1 =this.captcha_alpha[math.floor(math.random()* this.captcha_alpha.length)];
    let captcha2 =this.captcha_alpha[math.floor(math.random()* this.captcha_alpha.length)];
    let captcha3 =this.captcha_alpha[math.floor(math.random()* this.captcha_alpha.length)];
    let captcha4 =this.captcha_alpha[math.floor(math.random()* this.captcha_alpha.length)];

    this.captcha=captcha1+captcha2+captcha3+captcha4;

   // alert(this.captcha+"captcha")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }
  private getVerificactionCode(phoneNumber:number){
    if(String(phoneNumber) !="undefined"){
      //getVerificationID  verifyPhoneNumber
      //alert("Before Send "+86+phoneNumber);
      (<any>window).FirebasePlugin.verifyPhoneNumber(86+phoneNumber,60,(credential)=>{
          //alert("SMS SENT Successfully"+86+phoneNumber);
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
  private doRefreshCaptcha(){
    this.captcha_alpha=['A', 'B', 'C','D', 'E', 'F','G', 'H', 'I','J', 'K', 'L','M', 'N', 'O','P', 'Q', 'R','S', 'T', 'U','V', 'W', 'X','Y','Z'];  
    let captcha1 =this.captcha_alpha[math.floor(math.random()* this.captcha_alpha.length)];
    let captcha2 =this.captcha_alpha[math.floor(math.random()* this.captcha_alpha.length)];
    let captcha3 =this.captcha_alpha[math.floor(math.random()* this.captcha_alpha.length)];
    let captcha4 =this.captcha_alpha[math.floor(math.random()* this.captcha_alpha.length)];
  
    this.captcha=captcha1+captcha2+captcha3+captcha4;
  }

  private doValidateSubmitForget(){
     let captcha = this.captcha.split(' ').join('');
     let typeCaptcha = this.typeCaptcha.split(' ').join('');
     alert(captcha+"captchacaptcha"+ "typeCaptchatypeCaptcha" +typeCaptcha);
     if(captcha==typeCaptcha){
       return true;
     }else{
       return false;
     }

  }

 

}
