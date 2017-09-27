import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController,Events,ModalController } from 'ionic-angular';
import { Sqlite } from "../../providers/sqlite";
import { EdituserdetailPage } from '../edituserdetail/edituserdetail';

/**
 * Generated class for the UserdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-userdetail',
  templateUrl: 'userdetail.html',
})
export class UserdetailPage {
  public user:any;

  constructor(public navCtrl: NavController,public event:Events, public navParams: NavParams, public modalCtrl: ModalController,public sqliteService: Sqlite, protected platform: Platform, private alertCtrl: AlertController) {
    this.doRefresh(0);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserdetailPage');
  }
  ionViewWillEnter(){
    this.platform.ready().then(() => {
      this.sqliteService.getRows().then(s => {
        console.log("this.sqliteService.arr", this.sqliteService.arr)
        this.user = this.sqliteService.arr;
      });
    })
}
doRefresh(refresher){
  this.sqliteService.getRows().then(s => {
    console.log("this.sqliteService.arr", this.sqliteService.arr)
    this.user = this.sqliteService.arr;
      if(refresher != 0)
         refresher.complete();
    });
};

  removeItem(i) {
    //Deleting function
    this.sqliteService.del(i).then(s => {
      this.user = this.sqliteService.arr;
      console.log("this.sqliteService.arr", this.sqliteService.arr)
      let alert = this.alertCtrl.create({
        title: 'Demo',
        subTitle: 'Successfully Deleted',
        buttons: ['Dismiss']
      });
      alert.present();


    });

  }
  Edit(i)
  {
    this.sqliteService.getPRows(i).then(s => {
      this.user = this.sqliteService.arr;
      console.log("this.user",this.user)
      //navigation with data
      let userdata = this.user;
      this.navCtrl.push(EdituserdetailPage,
      {userdata}
      );
      //let modal = this.modalCtrl.create(EdituserdetailPage);
       //modal.present();

    });
  }

}
