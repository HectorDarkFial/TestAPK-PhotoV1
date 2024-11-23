import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelaitsPage } from './delaits.page';

const routes: Routes = [
  {
    path: '',
    component: DelaitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelaitsPageRoutingModule {}
