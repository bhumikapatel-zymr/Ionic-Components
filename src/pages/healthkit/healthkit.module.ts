import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthkitPage } from './healthkit';

@NgModule({
  declarations: [
    HealthkitPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthkitPage),
  ],
})
export class HealthkitPageModule {}
