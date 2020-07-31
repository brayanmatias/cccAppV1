import { Component, OnInit } from '@angular/core';
import { Crud } from '../../services/crud.service';
import { Temperatura } from '../clases/temperatura';

@Component({
  selector: 'app-albercas',
  templateUrl: './albercas.page.html',
  styleUrls: ['./albercas.page.scss'],
})
export class AlbercasPage implements OnInit {
  temperaturas: Temperatura[] = [];
  constructor(private crud: Crud) { }

  async ngOnInit() {
    try {
      const resp = await this.crud.getTemperaturas();
      this.temperaturas = JSON.parse(resp.data);
    } catch (e) {
      console.error(JSON.stringify(e));
    }
  }

}