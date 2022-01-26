import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-modal',
  templateUrl: './flight-modal.page.html',
  styleUrls: ['./flight-modal.page.scss'],
})
export class FlightModalPage implements OnInit {
@Input() value: any;
  constructor() { }

  ngOnInit() {
  }

}
