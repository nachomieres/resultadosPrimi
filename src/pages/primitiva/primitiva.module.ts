import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimitivaPage } from './primitiva';

@NgModule({
  declarations: [
    PrimitivaPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimitivaPage),
  ],
})
export class PrimitivaPageModule {}
