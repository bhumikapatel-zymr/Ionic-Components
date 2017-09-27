import { Component } from '@angular/core';
import { NavController,AlertController,NavParams,ModalController,ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {PeopleServiceProvider} from '../../providers/people-service';
import {Platform} from 'ionic-angular';
//import { IonicImageLoader } from 'ionic-image-loader';
import { App } from 'ionic-angular';
import { IUserDetail } from '../../model/userdetail';
import { ApidataPage } from '../apidata/apidata';


/**
 * Generated class for the PostapidataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-postapidata',
  templateUrl: 'postapidata.html',
})
export class PostapidataPage {

strname:string;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public viewCtrl: ViewController, public navParams: NavParams,public peopleservice:PeopleServiceProvider,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostapidataPage');
  }
showAlert()
{
  this.peopleservice.makePostRequest(this.strname)
 .subscribe(data => {
    var alert = this.alertCtrl.create({
        title: "Data String",
        subTitle: "Successfully insterted",
        buttons: ["close"]
    });
     alert.present();

   });
 }

 pop() {
   this.viewCtrl.dismiss();

 }



}
