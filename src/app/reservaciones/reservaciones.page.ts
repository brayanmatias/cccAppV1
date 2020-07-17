import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.page.html',
  styleUrls: ['./reservaciones.page.scss'],
})
export class ReservacionesPage implements OnInit {
  public area: string;
  constructor() { }

  ngOnInit() {
  }

  changeArea(event) {
    this.area = event.detail.value;
  }

}
