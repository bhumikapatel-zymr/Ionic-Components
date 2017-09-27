import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserdetailPage } from './userdetail';

@NgModule({
  declarations: [
    UserdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UserdetailPage),
  ],
  exports: [
    UserdetailPage
  ]
})
export class UserdetailPageModule {}
