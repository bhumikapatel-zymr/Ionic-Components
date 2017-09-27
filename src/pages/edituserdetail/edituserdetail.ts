import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { Sqlite } from "../../providers/sqlite";
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { DatePipe } from '@angular/common';
/**
 * Generated class for the EdituserdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edituserdetail',
  templateUrl: 'edituserdetail.html',
  providers: [ DatePicker ,DatePipe]

})
export class EdituserdetailPage {

  userdata = [];
  edituserdata: any;
  public gender: any;
  public Indian: any;
  hobbies: string[];
  hobbiesChecked: any;
  edithobbies: string[];
  public birthdate: any;
  public firstname: any;
  public lastname: any;
  public userid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private event: Events, public sqliteService: Sqlite, private alertCtrl: AlertController,public datePicker: DatePicker,public datepipe: DatePipe) {

    this.hobbies = ['dancing', 'reading', 'travelling', 'cooking'];
    this.userdata = this.navParams.get("userdata");
    this.edituserdata = this.userdata[0]
    this.gender = this.navParams.data.userdata[0].gender
    this.Indian = this.navParams.data.userdata[0].indian
    this.hobbiesChecked = this.navParams.data.userdata[0].hobbies
    this.firstname = this.navParams.data.userdata[0].firstname
    this.lastname = this.navParams.data.userdata[0].lastname
    this.userid = this.navParams.data.userdata[0].id
    this.birthdate = this.navParams.data.userdata[0].birthdate
    this.edithobbies = [];

    this.datePicker.onDateSelected.subscribe(
     (date) => {
       this.birthdate = datepipe.transform(date, 'yyyy-MM-dd');

       console.log(date);
   });

  }

  ionViewDidLoad() {

    this.userdata = this.navParams.get("userdata");
    this.edituserdata = this.userdata[0]
    this.gender = this.navParams.data.userdata[0].gender
    console.log("this", this.navParams.data.userdata[0].hobbies);



  }

  updateCheckedOptions(chBox, event) {
    var cbIdx = this.edithobbies.indexOf(chBox);

    if (event.target.checked) {
      if(this.hobbiesChecked.includes(chBox))
      {
      this.hobbiesChecked.splice(chBox);
      console.log(this.edithobbies);
    }
    else
    {
      if (cbIdx < 0) {

        this.edithobbies.push(chBox);
      }
      }

    } else {
      if (cbIdx >= 0) {
        this.edithobbies.splice(cbIdx, 1);
        console.log(this.edithobbies);
      }

    }
  }

  notify(event) {
    this.Indian = event.checked;
    console.log(this.Indian);
  }

  //updating function
  SubmitTapped(i) {
    console.log(this.firstname);
    console.log(this.userid);
    this.hobbiesChecked = this.hobbiesChecked.concat(this.edithobbies);
    console.log("hello",this.hobbiesChecked);

    this.sqliteService.update(this.firstname, this.lastname, this.gender, this.Indian, this.edithobbies,this.birthdate,this.userid).then(s => {
      let alert = this.alertCtrl.create({
        title: 'Demo',
        subTitle: 'Successfully Updateded',
        buttons: ['Dismiss']
      });
      alert.present();



    });
  }
  showCalendar(){
    this.datePicker.showCalendar();
  }

}
