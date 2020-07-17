import { Component, OnInit } from '@angular/core';
import { Crud } from '../../services/crud.service';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.page.html',
  styleUrls: ['./comunicados.page.scss'],
})
export class ComunicadosPage implements OnInit {
  comunicados: any[] = [];
  constructor(private crudService: Crud) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.crudService.getComunicados().then(resp => {
      this.comunicados = JSON.parse(resp.data);
    }).catch(e => {
      console.error(JSON.stringify(e));
    });
  }

}
