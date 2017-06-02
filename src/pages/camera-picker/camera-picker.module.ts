import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPickerPage } from './camera-picker';


@NgModule({
  declarations: [
    CameraPickerPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPickerPage),
  ],
  exports: [
    CameraPickerPage
  ]
})
export class CameraPickerPageModule {}
