import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightModalPage } from './flight-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FlightModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightModalPageRoutingModule {}
