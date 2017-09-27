import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalnotificationPage } from './localnotification';

@NgModule({
  declarations: [
    LocalnotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalnotificationPage),
  ],
})
export class LocalnotificationPageModule {}
