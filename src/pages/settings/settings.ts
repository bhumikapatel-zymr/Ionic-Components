import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

strRating:String;

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl:AlertController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  giveRating() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Give rating');

    alert.addInput({
      type: 'radio',
      label: '5 star',
      value: '5 star',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '4 star',
      value: '4 star',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '3 star',
      value: '3 star',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '2 star',
      value: '2 star',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '1 star',
      value: '1 star',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {

        this.strRating = data;
        console.log("data",data);

      }
    });
    alert.present();
  }

  showRating()
  {

    if(this.strRating == null)
    {
      let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Give rating First!',
      buttons: ['OK']
    });
    alert.present();

    }
    else
    {

    let toast = this.toastCtrl.create({   // you can change text olor and backgrounf color in variable.css file
         message: 'rating is ' + this.strRating,
         duration: 5000,
         position: "top"
       });
       toast.present();
 }
 }


}
