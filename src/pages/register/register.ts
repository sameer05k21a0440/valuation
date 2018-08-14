import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import {regexValidators} from '../validators/validator';

import { CredentialPage  } from '../credential/credential';
import { MenuTabPage } from '../menu-tab/menu-tab';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  userName:any;
  countryCode:any;
  phoneNumber:number;
  verificationCode:number;
  verificationId:any;
  getcodeBtn:string ='Get Code';
  public type = 'password';
  public showPass = false;
  private registerFormGroup:FormGroup;
  private tags = ['Enterprise', 'Organization', 'Personal'];
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,private toast:ToastController) {
    this.countryCode="cn";
    this.registerFormGroup=this.formBuilder.group({
      userName:new FormControl('',Validators.compose([Validators.required])),
      phoneNumber:new FormControl('',Validators.compose([Validators.required])),
      countryCode:new FormControl('',Validators.compose([Validators.required])),
      verificationCode:new FormControl('',Validators.compose([Validators.required])),
      password:new FormControl('',Validators.compose([Validators.pattern(regexValidators.password), Validators.required])),
      tags: new FormControl('', [])
    });
  }

  ionViewDidLoad() {
    document.getElementById("displayDiv").innerHTML=this.getcodeBtn;
    console.log('ionViewDidLoad RegisterPage');
  }
  private getVerificactionCode(countryCode:any, phoneNumber:number){
    var maxSecTime=60;
    var setIntrvl;
    if(String(phoneNumber) !="undefined" && String(this.userName !="undefined")){
        setIntrvl = setInterval(function() {
          if (maxSecTime == 0) {
            clearInterval(setIntrvl);
            document.getElementById("displayDiv").innerHTML = "EXPIRED";
          }else if(maxSecTime>0){
            document.getElementById("displayDiv").innerHTML = maxSecTime +"S" ;
            maxSecTime--;
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
        },1000);
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

  private HomePage(){
   this.navCtrl.push(MenuTabPage);  
  }

  private onChange(val){
    console.log(this.tags)
  }
}
