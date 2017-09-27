import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the TabbarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabbar',
  templateUrl: 'tabbar.html',
})
export class TabbarPage {

  tab1Root = AboutPage;
  tab2Root = ContactPage;
  tab3Root = SettingsPage;

  constructor(public navCtrl: NavController) {

  }
}
