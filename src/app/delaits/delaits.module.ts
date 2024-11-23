import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelaitsPageRoutingModule } from './delaits-routing.module';

import { DelaitsPage } from './delaits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelaitsPageRoutingModule
  ],
  declarations: [DelaitsPage]
})
export class DelaitsPageModule {}
