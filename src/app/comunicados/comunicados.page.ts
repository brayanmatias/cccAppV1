import { Component, OnInit } from '@angular/core';
import { Crud } from '../../services/crud.service';
import { Router, NavigationExtras } from '@angular/router';
import { Comunicado } from '../clases/comunicado';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.page.html',
  styleUrls: ['./comunicados.page.scss'],
})
export class ComunicadosPage implements OnInit {
  comunicados: Comunicado[] = [];
  constructor(private crudService: Crud, private router: Router) { }

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

  details(comunicado: Comunicado) {
    const navigationExtras: NavigationExtras = {
      state: {
        comunicado
      }
    };
    this.router.navigate(['/detalle-comunicado'], navigationExtras);
  }

}
