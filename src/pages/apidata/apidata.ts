import { Component } from '@angular/core';
import { NavController,AlertController,ModalController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {PeopleServiceProvider} from '../../providers/people-service';
import {Platform} from 'ionic-angular';
//import { IonicImageLoader } from 'ionic-image-loader';
import { App } from 'ionic-angular';
import { IUserDetail } from '../../model/userdetail';
import { PostapidataPage } from '../Postapidata/Postapidata';

/**
 * Generated class for the ApidataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-apidata',
  templateUrl: 'apidata.html',
})
export class ApidataPage {


  userdetails: IUserDetail[];
  strfirstname:string;
  strlastname:string;
  strgender:string;
  stremail:string;
  strimage:string;

  constructor(private app: App,public modalCtrl: ModalController,platform: Platform ,public navCtrl: NavController , public http:Http , public peopleservice:PeopleServiceProvider,private alertCtrl: AlertController) {



  /*  this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10&sort=hot').map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
        console.log(this.posts);
      },
  err => {
      console.log("Oops!");
  });*/
  platform.ready().then((readySource) => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
  this.app._setDisableScroll(true);

  peopleservice.getIPAddress()
  .subscribe(userdetails => {
      this.userdetails = userdetails
      console.log("items",this.userdetails[0])
      this.strfirstname =  this.userdetails[0].name["first"];
      this.strimage =  this.userdetails[0].picture["large"];
      this.strlastname =  this.userdetails[0].name["last"];
      this.strgender =  this.userdetails[0].gender;
      this.stremail =  this.userdetails[0].email;
    },
    error => console.log(error));

      /*console.log("items",this.userdetail)
      this.itemsdict = this.items[0]
      this.userdetail = this.items[0]
      console.log("this.userdetail",this.userdetail)

      this.arrname = this.itemsdict["name"]
      this.arrimage = this.itemsdict["picture"]
      this.arraddress = this.itemsdict["location"]

      console.log("items",this.arrname["0"])
      console.log("items",this.arrimage["medium"])

      this.strImage = this.arrimage["medium"];
      console.log("this.strImage",this.strImage)*/

}

 onPush()
 {

   let modal = this.modalCtrl.create(PostapidataPage);
    modal.present();
   /*this.peopleservice.makePostRequest().then(data => {
     var alert = this.alertCtrl.create({
         title: "Data String",
         subTitle: data["data"],
         buttons: ["close"]
     });
      alert.present();

    });*/

 }


  }
