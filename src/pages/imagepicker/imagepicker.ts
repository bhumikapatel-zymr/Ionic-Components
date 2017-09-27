import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the ImagepickerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 /*need to add following plugin for image Picker

 ionic cordova plugin add cordova-plugin-camera
 npm install --save @ionic-native/camera

*/

 /* For  camera plugin you need to use the Cordova browser
  This is quite late but anyone going through the same problem might benefit from this answer.First try to add browser by running below command
 ionic cordova platform add browser 
 and then run command
ionic cordova run browser*/

@Component({
  selector: 'page-imagepicker',
  templateUrl: 'imagepicker.html',
})
export class ImagepickerPage {

base64Image:any;
imageURL

  constructor(public navCtrl: NavController, public navParams: NavParams,public camera:Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagepickerPage');
  }

  accessGallery(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }
  accessCamera(){
    this.camera.getPicture({
       destinationType: this.camera.DestinationType.DATA_URL,
       targetWidth: 1000,
       targetHeight: 1000
   }).then((imageData) => {
     // imageData is a base64 encoded string
       this.base64Image = "data:image/jpeg;base64," + imageData;
   }, (err) => {
       console.log(err);
   });
 }

}
