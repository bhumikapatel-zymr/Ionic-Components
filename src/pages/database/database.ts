import { Component } from '@angular/core';
import { NavController, NavParams , Platform, AlertController,LoadingController} from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Sqlite } from "../../providers/sqlite";
import { UserdetailPage } from '../userdetail/userdetail';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'page-database',
  templateUrl: 'database.html',
  providers: [ DatePicker ,DatePipe]

})
export class DatabasePage {

   today
   public user = [];
   public firstname: any;
   public gender: any;
   public lastname: any;
   public Indian: any;
   public birthdate: any;

   hobbies: string[];
   hobbiesChecked: string[];

   constructor(public navCtrl: NavController,
     public sqliteService: Sqlite, protected platform: Platform, private alertCtrl: AlertController,public datePicker: DatePicker,public datepipe: DatePipe,public loadingCtrl: LoadingController,) {
     this.hobbies = ['dancing', 'reading', 'travelling', 'cooking'];
     this.hobbiesChecked = [];

     //First We need to ready the Platform
     this.platform.ready().then(() => {
       this.sqliteService.getRows().then(s => {
         console.log("this.sqliteService.arr", this.sqliteService.arr)
         this.user = this.sqliteService.arr;
       });
     })

     this.datePicker.onDateSelected.subscribe(
      (date) => {
        this.birthdate = datepipe.transform(date, 'yyyy-MM-dd');

        console.log(date);
    });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabasePage');
  }
  updateCheckedOptions(chBox, event) {
    var cbIdx = this.hobbiesChecked.indexOf(chBox);

    if (event.target.checked) {
      if (cbIdx < 0) {
        this.hobbiesChecked.push(chBox);
        console.log(this.hobbiesChecked);
      }

    } else {
      if (cbIdx >= 0) {
        this.hobbiesChecked.splice(cbIdx, 1);
        console.log(this.hobbiesChecked);
      }

    }
  }
  onPush() {
    this.navCtrl.push(UserdetailPage)
  }
  notify(event) {
    this.Indian = event.checked;
    console.log(this.Indian);
  }
  //Adding the Function
  SubmitTapped(i) {


    if(this.Indian == null)
    {
      this.Indian ==  false
    }
    this.sqliteService.addItem(this.firstname, this.lastname, this.gender, this.Indian, this.hobbiesChecked,this.birthdate).then(s => {

      let alert = this.alertCtrl.create({
        title: 'Demo',
        subTitle: 'Successfully Insterted',
        buttons: ['Dismiss']

      });
      alert.present();
      this.user = this.sqliteService.arr;
      this.firstname = '';
      this.lastname = '';
      this.gender = '';
      if(this.Indian == null)
      {
        this.Indian ==  false
      }
      this.hobbiesChecked = [];


    });

  }

  showCalendar(){
    this.datePicker.showCalendar();
  }


}
