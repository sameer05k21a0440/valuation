import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import {regexValidators} from '../validators/validator';

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
  phoneNumber:number;
  verificationCode:number;
  private registerFormGroup:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    this.registerFormGroup=this.formBuilder.group({
      telNumber:new FormControl('',Validators.compose([Validators.required])),
      verificationCode:new FormControl('',Validators.compose([Validators.required])),
      password:new FormControl('',Validators.compose([Validators.pattern(regexValidators.password), Validators.required]))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
