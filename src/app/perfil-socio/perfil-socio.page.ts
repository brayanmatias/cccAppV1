import { ModalContrasenaPage } from './../modal-contrasena/modal-contrasena.page';
import { AutenticacionService } from 'src/services/autenticacion.service';
import { Crud } from 'src/services/crud.service';
import { BaseComponent } from 'src/utilidades/base.componet';
import { Component, OnInit, Injector } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-perfil-socio',
	templateUrl: './perfil-socio.page.html',
	styleUrls: ['./perfil-socio.page.scss'],
})
export class PerfilSocioPage extends BaseComponent implements OnInit {

	constructor(private injector: Injector, private crud: Crud, private auth: AutenticacionService, public modalController: ModalController) {
		super(injector);
	}

	async ngOnInit() {
		await this.obtenerSocio();
	}

	public async obtenerSocio() {
		// const usuario = await this.auth.getCurrentUser();
		// const respuesta = await this.crud.getPerfilSocio(usuario.usuario_id);
		// console.log(JSON.stringify(respuesta.data));
	}


	public async cambiarContrasena() {

		const modal = await this.modalController.create({
			component: ModalContrasenaPage,
			cssClass: 'my-custom-class'
		});
		return await modal.present();

	}

}
