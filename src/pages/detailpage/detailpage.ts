import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

/**
 * Generated class for the DetailpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-detailpage',
  templateUrl: 'detailpage.html',
})
export class DetailpagePage {

public strname:any;
public stricon:any;
public strinfo:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailpagePage');
    this.strname = this.navParams.get('thing1');
    this.stricon = this.navParams.get('thing2');
    this.strinfo = this.navParams.get('thing3');

  }

  launch(url) {
          new InAppBrowser(this.strinfo,'_blank');
    }

}
