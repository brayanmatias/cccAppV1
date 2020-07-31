import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-recuperar-contrasena',
	templateUrl: './recuperar-contrasena.page.html',
	styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {
	public correo = '';

	constructor() { }

	ngOnInit() {
	}

	/**
	 * enviarCorreo
	 */
	public enviarCorreo() {

	}

}
