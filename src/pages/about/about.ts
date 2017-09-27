import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  backpage()
  {
     console.log("bhumika")
     this.navCtrl.setRoot(HomePage,{},{animate:false});

    }

}
