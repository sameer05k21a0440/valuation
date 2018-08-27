import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App ,AlertController,ToastController,Platform,ActionSheetController,LoadingController} from 'ionic-angular';

import {MenuPage} from '../menu/menu';

import { TranslateService } from '@ngx-translate/core';
import { CredentialPage } from '../credential/credential';

//import { Camera } from '@ionic-native/camera';
import { CameraProvider } from '../../providers/camera-provider';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  placeholderPicture = 'https://api.adorable.io/avatar/200/bob';
  lang:any;
  enableNotifications = false;
  user = {
    name: 'user',
    imageUrl: 'assets/imgs/profile-2.jpg'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,public alertCtrl:AlertController, public platform: Platform,public translate: TranslateService,private app:App, public cameraProvider: CameraProvider,public actionsheetCtrl: ActionSheetController,public loadingCtrl: LoadingController) {
    this.lang='zh';
    this.translate.use('zh');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  private menuPage(){
    this.navCtrl.push(MenuPage);
  }

  private switchLanguage(){
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }

  private logOut(){
    let title :any ={};
    this.translate.get('logoutAlert').subscribe(data=>{
     title.alert=data;
    });
    this.translate.get('logoutAlertMessage').subscribe(data=>{
      title.message=data;
     });
     this.translate.get('logoutAlertCancel').subscribe(data=>{
      title.cancel=data;
     });
     this.translate.get('logout').subscribe(data=>{
      title.logout=data;
     });

     let alert =this.alertCtrl.create({
       title :title.alert,
       message:title.message,
       buttons: [
        {
          text: title.cancel,
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text:title.logout,
          handler: () => {
            this.app.getRootNav().setRoot(CredentialPage);
          }}]
     });
     alert.present();
    
  }


  toggleNotifications() {
    if (this.enableNotifications) {
      alert('Notifications enabled.')
      
      //this.toastCtrl.create('Notifications enabled.');
    } else {
      alert('Notifications disabled.')
      //this.toastCtrl.create('Notifications disabled.');
    }
  }

private changeProfilePicture(){
  let photoTitle :any ={};
  this.translate.get('changePhotoTitle').subscribe(data=>{
    photoTitle.title=data;
   });
   this.translate.get('changePhotoCamera').subscribe(data=>{
    photoTitle.camera=data;
   });
   this.translate.get('changePhotoImage').subscribe(data=>{
    photoTitle.image=data;
   });
   this.translate.get('logoutAlertCancel').subscribe(data=>{
    photoTitle.cancel=data;
   });
  const actionsheet = this.actionsheetCtrl.create({
    title:  photoTitle.title,
    buttons: [
      {
        text: photoTitle.camera,
        icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
        handler: () => {
          this.takePicture();
        }
      },{
        text:photoTitle.image,
        icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
        handler: () => {
          this.getPicture();
        },

      },{
        text: photoTitle.cancel,
        icon: !this.platform.is('ios') ? 'close' : null,
        role: 'destructive',
        handler: () => {
          console.log('the user has cancelled the interaction.');
        }
      }
    ]
  });
  return actionsheet.present();
}

takePicture() {
  const loading = this.loadingCtrl.create();
  loading.present(); 
  return this.cameraProvider.getPictureFromCamera().then(picture => {
    if (picture) {
    this.user.imageUrl  = picture;
    }
    loading.dismiss();
  }, error => {const toast= this.toastCtrl.create({
    message:'Error Take Picture'+error,
    duration:3000
  });
  toast.present();
  });
}


getPicture() {
  const loading = this.loadingCtrl.create();

  loading.present();
   this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
    if (picture) {
      this.user.imageUrl  = picture;
    }
    loading.dismiss();
  },error => {const toast= this.toastCtrl.create({
    message:'Error Get picture'+error,
    duration:3000
  });
  toast.present();
});
}

private profileHelp(){

}
private appInfoAbout(){

}


}
