import { AutenticacionService } from 'src/services/autenticacion.service';
import { BaseComponent } from 'src/utilidades/base.componet';
import { Crud } from 'src/services/crud.service';
import { Component, OnInit, Injector } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-ingresos',
	templateUrl: './ingresos.page.html',
	styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage extends BaseComponent implements OnInit {
	public nombreClase = 'IngresosPage';
	public usuario: any;
	public ingresos: [] = [];

	constructor(private injector: Injector, private crud: Crud, private auth: AutenticacionService) {
		super(injector);
	}

	async ngOnInit() {
	}
	async ionViewWillEnter() {
		this.usuario = await this.auth.getCurrentUser();
		this.loader.abrir();
		try {
			await this.obtenerIngresos(this.usuario.usuario_id);
		} catch (error) {

		} finally {
			this.loader.cerrar();
		}
	}

	ionViewDidLeave() {
	}


	public async obtenerIngresos(usuarioId: string) {
		const nombreMetodo = 'obtenerIngresos';
		console.log(`[${this.nombreClase}][${nombreMetodo}] Incializando componente...`);
		try {
			const respuesta = await this.crud.getIngresos(usuarioId);
			this.ingresos = JSON.parse(respuesta.data);
		} catch (error) {
			this.toastr.error('Error', 'Error al obtener ingresos');
		}
	}

}
