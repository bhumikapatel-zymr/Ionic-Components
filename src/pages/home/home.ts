import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasicPage } from '../basic/basic';
import { SliderPage } from '../slider/slider';
import { TabbarPage } from '../tabbar/tabbar';
import { ImagepickerPage } from '../imagepicker/imagepicker';
import { DatabasePage } from '../database/database';
import { PassdataPage } from '../passdata/passdata';
import { ApidataPage } from '../apidata/apidata';
import { AddressbookPage } from '../addressbook/addressbook';
import { MappagePage } from '../mappage/mappage';
import { LocalnotificationPage } from '../localnotification/localnotification';
import { AudioplayerPage } from '../audioplayer/audioplayer';
import { HealthkitPage } from '../healthkit/healthkit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;

  constructor(public navCtrl: NavController) {

    this.items = [
    'Basic',
    'Slider',
    'TabBar',
    'Image Picker',
    'Passing data with navigation',
    'Forms with SqliteDB',
    'API',
    'Addressbook',
    'Map',
    'Local Notification',
    'Audio Streaming',
    'healthkit'

  ];



}
itemSelected(item: string) {

var pagename:string = item;
switch(pagename) {
   case "Basic": {
       this.navCtrl.push(BasicPage);
      break;
   }
   case "Slider": {
     this.navCtrl.push(SliderPage);
      break;
   }
   case "TabBar": {
     this.navCtrl.push(TabbarPage);
      break;
   }
   case "Image Picker": {
     this.navCtrl.push(ImagepickerPage);
      break;
   }
   case "Passing data with navigation":
   {
     this.navCtrl.push(PassdataPage);
     break;

   }
   case "Forms with SqliteDB":
   {
     this.navCtrl.push(DatabasePage);
     break;

   }
   case "API":
   {
     this.navCtrl.push(ApidataPage);
     break;

   }
   case "Addressbook":
   {
     this.navCtrl.push(AddressbookPage);
     break;
   }
   case "Map":
   {
     this.navCtrl.push(MappagePage);
     break;
   }
   case "Local Notification":
   {
     this.navCtrl.push(LocalnotificationPage);
     break;
   }
   case "Audio Streaming":
   {
     this.navCtrl.push(AudioplayerPage);
     break;
   }
   case "healthkit":
   {
     this.navCtrl.push(HealthkitPage);
     break;
   }

   default: {
      break;
   }
}

}
}
