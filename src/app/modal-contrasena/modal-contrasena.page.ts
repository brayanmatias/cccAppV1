import { ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-modal-contrasena',
	templateUrl: './modal-contrasena.page.html',
	styleUrls: ['./modal-contrasena.page.scss'],
})
export class ModalContrasenaPage implements OnInit {
	public contrasenaAnterior = '';
	public contrasenaNueva = '';
	public contrasenaConfirmacion = '';
	@ViewChild('formularioContrasena') formularioContrasena: NgForm;

	constructor(public modalCtl: ModalController) { }

	ngOnInit() {
	}


	public guardar() {
		console.log('formularioContrasena', this.formularioContrasena);

	}

}
