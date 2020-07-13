import { FechaDate } from './../../utilidades/fechas';
import { Crud } from './../../services/crud.service';
import { Component, OnInit, Injector } from '@angular/core';
import { Socio } from '../clases/socio';
import { BaseComponent } from '../../utilidades/base.componet';

@Component({
	selector: 'app-validacion-usuario',
	templateUrl: './validacion-usuario.page.html',
	styleUrls: ['./validacion-usuario.page.scss'],
})
export class ValidacionUsuarioPage extends BaseComponent implements OnInit {

	public socioEdicion: Socio;

	constructor(private injector: Injector, private crudService: Crud) {
		super(injector);
	}

	ngOnInit() {
		this.inicializa();
	}


	ionViewWillEnter() {
		this.menu.enable(false);
	}

	private inicializa() {
		this.socioEdicion = new Socio();
	}

	/**
	 * validar usuario
	 */
	public async validarUsuario() {
		this.loader.abrir();
		let fecha = this.socioEdicion.FechaNacimiento.toString();
		fecha = fecha.slice(0, 10);
		this.socioEdicion.FechaNacimiento = fecha;
		this.crudService.validarSocio(this.socioEdicion).then(resp => {
			const data = JSON.parse(resp.data);
			if (data.success) {
				let idUsuario = JSON.stringify(data.IdUsuario);
				idUsuario = idUsuario.replace('"','');
				idUsuario = idUsuario.replace('"','');
				
				this.router.navigate(['registro', idUsuario]);
			} else {
				this.toastr.alerta('Alerta', 'Socio no encontrado');
			}
		}).catch(error => {
			alert(JSON.stringify(error));
		}).finally(() => {
			this.loader.cerrar();
		});
	}

}
