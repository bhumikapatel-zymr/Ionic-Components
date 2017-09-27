import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the BasicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
})
export class BasicPage {

  name1 = '';
  name2 = '';
  sum = 0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicPage');
  }
  get score()
  {

  const letters = (this.name1 + this.name2).toLowerCase();
  this.sum = 0;
  for (let i = 0 ; i< letters.length; i++)
  {
       this.sum += letters.charCodeAt(i)
  }
     return this.sum % 100;
  }

  showAlert() {

    if (this.sum % 100 == 0) {
      let alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: "Please enter the name first",
        buttons: ['OK']
      });
      alert.present();
       }
      else
      {
      let alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: this.name1 + " and " + this.name2 + "  " + String(this.sum % 100),
        buttons: ['OK']
      });
      alert.present();
    }
  }



}
