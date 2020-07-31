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


<<<<<<< HEAD
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

=======
	async ionViewWillEnter() {
		this.loader.abrir();
		await this.obtenerAreas();
		this.loader.cerrar();
	}

	async changeArea(event) {
		this.area = event.detail.value;
	}

	async changeDia(event) {
		this.dia = event.detail.value;
		await this.obtenerHorarios(this.area, this.dia);
		console.log(this.horarios);


	}


	private async obtenerAreas() {
		const { data } = await this.crud.getAreas();
		this.listaAreas = JSON.parse(data);
	}


	private async obtenerHorarios(areaId: Number, dia: string) {
		try {
			this.loader.abrir();
			const resultado = await this.crud.getHorarios(areaId, dia)
			const horas = JSON.parse(resultado.data);
			for (const hora of horas) {
				let horaFind = this.horarios.findIndex(horario => horario.hora == hora.HORA);
				console.log(horaFind);
				if (horaFind >= 0) {
					this.horarios.splice(horaFind, 1);
				}
			}
		} catch (e) {
			console.error(JSON.stringify(e));
		} finally{
			this.loader.cerrar();
		}

	}

}

export interface Area {
	id: string;
	area: string;
>>>>>>> 9a94314e0879b446926597e3245407cd9529fe27
}
