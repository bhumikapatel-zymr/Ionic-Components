import { Component,ElementRef, Directive,HostListener ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,AlertController} from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';

/**
 * Generated class for the LocalnotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localnotification',
  templateUrl: 'localnotification.html',
})


export class LocalnotificationPage {

  @ViewChild('myInput') myInput: ElementRef;

      timeNotify: Date;
      notifications: any[] = [];
      days: any[];
      chosenHours: number;
      timeText: string;
      reminder: string;

    constructor(public navCtrl: NavController, public navParams: NavParams , public element:ElementRef,public platform: Platform, public alertCtrl: AlertController,public localNotifications: LocalNotifications) {
    this.platform.ready().then((readySource) => {
       this.localNotifications.on('click', (notification, state) => {
         let json = JSON.parse(notification.data);

         let alert = this.alertCtrl.create({
           title: notification.title,
           subTitle: json.mydata
         });
         alert.present();
  })
}); this.element = element;
       this.timeText = moment(new Date()).format();
       this.timeNotify = new Date();

  }
   ionViewDidLoad() {
    console.log('ionViewDidLoad LocalnotificationPage');
  }

  timeChange(time){
    this.timeNotify = new Date();
    this.timeNotify.setHours(time.hour, time.minute, 0);
    console.log('ionViewDidLoad LocalnotificationPage',time.hour);
    console.log('ionViewDidLoad LocalnotificationPage',time.minute);

}
addNotifications(){

  this.localNotifications.schedule({
    id: 1,
    title: 'Notify...',
    text: 'Hi, this is test notification.',
    data: { mydata: this.reminder },
    at: this.timeNotify,
    every: 'week',
    sound: this.setSound(),
  });
  console.log('ionViewDidLoad LocalnotificationPage');
  this.navCtrl.popToRoot();
}

resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
}
setSound(){
 if (this.platform.is('android')) {
      return 'file://assets/sounds/notify.wav'
    } else {
      return 'file://assets/sounds/baby.mp3'
    }
  }
onCancel() {
  return this.platform.ready().then(() => {
    return this.localNotifications.cancelAll();
  })
}


}
