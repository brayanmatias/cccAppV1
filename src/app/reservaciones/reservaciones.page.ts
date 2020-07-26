import { Component, OnInit, Injector } from '@angular/core';
import { Crud } from '../../services/crud.service';
import { BaseComponent } from '../../utilidades/base.componet';
import { Horario } from '../clases/horario';

@Component({
	selector: 'app-reservaciones',
	templateUrl: './reservaciones.page.html',
	styleUrls: ['./reservaciones.page.scss'],
})
export class ReservacionesPage extends BaseComponent implements OnInit {
	public listaAreas: Area[];
	public dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
	public horarios: Horario[] = [
		{ title: 'Horario 1', hora: '07:00:00' },
		{ title: 'Horario 2', hora: '07:15:00' },
		{ title: 'Horario 1', hora: '07:30:00' },
		{ title: 'Horario 1', hora: '07:45:00' },
		{ title: 'Horario 1', hora: '08:00:00' },
		{ title: 'Horario 1', hora: '08:15:00' },
		{ title: 'Horario 1', hora: '08:30:00' },
		{ title: 'Horario 1', hora: '08:45:00' },
		{ title: 'Horario 1', hora: '09:00:00' },
		{ title: 'Horario 1', hora: '09:15:00' },
		{ title: 'Horario 1', hora: '09:30:00' },
		{ title: 'Horario 1', hora: '09:45:00' },
	];
	public area: Number;
	public dia: string;
	constructor(private injector: Injector, private crud: Crud) {
		super(injector);
	}

	async ngOnInit() {
		this.listaAreas = [];
	}


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
}
