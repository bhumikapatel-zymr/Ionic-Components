import { Component } from '@angular/core';
import { NavController, NavParams, Platform ,LoadingController,ToastController} from 'ionic-angular';
import { Contacts } from 'ionic-native';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the AddressbookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 /*Install the Cordova and Ionic Native plugins: for calling
$ ionic cordova plugin add call-number
$ npm install --save @ionic-native/call-number*/

@Component({
  selector: 'page-addressbook',
  templateUrl: 'addressbook.html',
})
export class AddressbookPage {
  contactlist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,private callNumber: CallNumber, public loadingCtrl:LoadingController ,  public  TostCtrl:ToastController) {

    let loader = this.loadingCtrl.create({
         content: 'Please wait...',
       });
    loader.present();
       var opts = {
          filter : "",
          multiple: true,
          hasPhoneNumber:true,
          fields:  [ 'displayName', 'name', 'givenName' ]
        };
        Contacts.find([ 'displayName', 'name' ,'givenName'],opts).then((contacts) => {
          console.log("contacts",contacts);
loader.dismiss();
          this.contactlist=contacts;
          console.log("contacts.list",this.contactlist.name);

        }, (error) => {
          console.log(error);
        })


  }

 call(event, contact) {
  console.log("contact",contact.phoneNumbers[0].value)
  this
   this.callNumber.callNumber(contact.phoneNumbers[0].value, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() =>
  {
    console.log('Error launching dialer');
    let toast = this.TostCtrl.create({   // you can change text olor and backgrounf color in variable.css file
         message: 'Please check your number',
         duration: 5000,
         position: "top"
       });
       toast.present();
  } );
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressbookPage');
  }

}
