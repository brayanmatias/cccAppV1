import { Component, OnInit, Injector } from '@angular/core';
import { Crud } from '../../services/crud.service';
import { BaseComponent } from '../../utilidades/base.componet';
import { Informacion } from '../clases/informacion';

@Component({
	selector: 'app-reservaciones',
	templateUrl: './reservaciones.page.html',
	styleUrls: ['./reservaciones.page.scss'],
})
export class ReservacionesPage extends BaseComponent implements OnInit {
  public informacion = new Informacion();
  public area: string;
  public horarios: any[] = [];
  constructor(private crud: Crud, private injector: Injector) {
		super(injector);
   }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    try {
      const resp = await this.crud.getInformacion();
      this.informacion = JSON.parse(resp.data);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  
  }


  async changeDia(event) {
    this.loader.abrir('Cargando horarios, por favor espere..');
    try {
      let data = {
        area: this.area,
        dia: event.detail.value
      };
      const resp = await this.crud.getHorarios(data);
      this.horarios = JSON.parse(resp.data);
      this.loader.cerrar();
    } catch (e) {
      this.loader.cerrar();
      console.error(JSON.stringify(e));
    }
   
  }

}
