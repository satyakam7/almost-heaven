import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FlightModalPage } from '../flight-modal/flight-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
ngOnInit(): void {

}
  constructor(private modalController: ModalController, private router: Router) {}

async presentModal() {
  const modal = await this.modalController.create({
  component: FlightModalPage,
  componentProps: { value: 123 }
  });

  await modal.present();

}
search() {
  console.log("true")
this.router.navigate(['/places']);
}
}
