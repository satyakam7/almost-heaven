import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightModalPageRoutingModule } from './flight-modal-routing.module';

import { FlightModalPage } from './flight-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightModalPageRoutingModule
  ],
  declarations: [FlightModalPage]
})
export class FlightModalPageModule {}
