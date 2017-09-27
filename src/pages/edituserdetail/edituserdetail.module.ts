import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EdituserdetailPage } from './edituserdetail';

@NgModule({
  declarations: [
    EdituserdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EdituserdetailPage),
  ],
  exports: [
    EdituserdetailPage
  ]
})
export class EdituserdetailPageModule {}
