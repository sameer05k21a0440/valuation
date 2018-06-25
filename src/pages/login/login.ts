import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators,AbstractControl,FormControl} from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  countryCode:string ="cn";
  private loginForm:FormGroup;
  constructor(public navCtrl: NavController,private formBuilder: FormBuilder ) {

    this.loginForm=this.formBuilder.group({
      //phoneNumber =['', Validators.required]
    })

  }

}
