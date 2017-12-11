import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccesPage } from './succes-page';

@NgModule({
  declarations: [
    SuccesPage,
  ],
  imports: [
    IonicPageModule.forChild(SuccesPage),
  ],
})
export class SuccesPageModule {}
