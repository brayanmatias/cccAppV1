import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController, Platform } from '@ionic/angular';

@Injectable()
export class Loader {
	private loadingElement: HTMLIonLoadingElement;
	private promesas: Promise<any>[] = [];
	private seEstaMostrando = false;
	constructor(private loadingController?: LoadingController) { }

	public async abrirConPromesa(promesa: Promise<any> | Promise<any>[], texto: string = 'cargando') {
		this.abrir(undefined, 5000);
		if (promesa instanceof Promise) {
			this.promesas.push(promesa);
		} else {
			for (let elemento of promesa) {
				this.promesas.push(elemento);
			}
		}
		Promise.all(this.promesas).then(() => {
			this.cerrar();
		}).catch((error) => {
			console.error('Loader error en promesa', error);
			this.cerrar();
		});
	}

	public async abrir(texto: string = 'Cargando', tiempoMaximo?: number) {
		if (!this.seEstaMostrando) {
			this.loadingElement = await this.loadingController.create({
				message: texto,
				duration: tiempoMaximo,
			});
			this.seEstaMostrando = true;
			return await this.loadingElement.present().then(() => {
				if (!this.seEstaMostrando) {
					this.loadingElement.dismiss();
				}
			});
		} else {
			this.seEstaMostrando = true;
		}
	}

	public async cerrar() {
		setTimeout(async () => {
			this.seEstaMostrando = false;
			if (this.loadingElement) {
				return await this.loadingElement.dismiss();
			}
		}, 500);
	}
}


@Injectable()
export class Swal {

	private static TEXTO_BOTON_ACEPTAR = 'Aceptar';
	private static TEXTO_BOTON_CANCELAR = 'Cancelar';
	private static TIPO_ALERTA = 'alert-title-warning';
	private static TIPO_ERROR = 'alert-title-danger';
	private static TIPO_EXITO = 'alert-title-success';
	private static TIPO_INFORMACION = 'alert-title-info';
	private static TIPO_PREGUNTA = 'alert-title-primary';

	constructor(private alertController: AlertController) {

	}

	public async alerta(titulo: string, mensaje: string) {
		const alert = await this.alertController.create({
			header: titulo,
			message: mensaje,
			cssClass: Swal.TIPO_ALERTA,
			buttons: ['Aceptar']
		});
		await alert.present();
	}

	public async informacion(titulo: string, mensaje: string) {
		const alert = await this.alertController.create({
			header: titulo,
			message: mensaje,
			cssClass: Swal.TIPO_INFORMACION,
			buttons: ['Aceptar']
		});
		await alert.present();
	}

	public async pregunta(titulo: string, mensaje: string) {
		const alert = await this.alertController.create({
			header: titulo,
			message: mensaje,
			cssClass: Swal.TIPO_PREGUNTA,
			buttons: ['Aceptar']
		});
		await alert.present();
	}

	public async exito(titulo: string, mensaje: string) {
		const alert = await this.alertController.create({
			header: titulo,
			message: mensaje,
			cssClass: Swal.TIPO_EXITO,
			buttons: ['Aceptar']
		});
		await alert.present();
	}

	public async error(titulo: string, mensaje: string) {
		const alert = await this.alertController.create({
			header: titulo,
			message: mensaje,
			cssClass: Swal.TIPO_ERROR,
			buttons: ['Aceptar']
		});
		await alert.present();

	}

	public async confirmar(titulo: string, mensaje: string, funcionAceptar: () => void, funcionCancelar?: () => void,
		textoBotonAceptar = Swal.TEXTO_BOTON_ACEPTAR, textoBotonCancelar = Swal.TEXTO_BOTON_CANCELAR) {

		const alert = await this.alertController.create({
			header: titulo,
			message: mensaje,
			cssClass: Swal.TIPO_PREGUNTA,
			buttons: [
				{
					text: textoBotonCancelar,
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						if (funcionCancelar) { funcionCancelar(); }
					}
				},
				{
					text: textoBotonAceptar,
					handler: () => {
						console.log('Alert ok');

						funcionAceptar();
					}
				}
			]
		});
		await alert.present();
	}

	public async guardarExito() {
		let titulo = 'Éxito'
		let mensaje = 'La información se guardó correctamente.'
		const alert = await this.alertController.create({
			header: titulo,
			message: mensaje,
			cssClass: Swal.TIPO_EXITO,
			buttons: ['Aceptar']
		});
		await alert.present();
	}

	public async guardarError() {
		let titulo = 'Error'
		let mensaje = 'Ocurrío un error al guardar la información.'
		const alert = await this.alertController.create({
			header: titulo,
			message: mensaje,
			cssClass: Swal.TIPO_ERROR,
			buttons: ['Aceptar']
		});
		await alert.present();
	}

}

@Injectable()
export class Toastr {
	public static readonly POSICION_CENTRO: "middle" = "middle";
	public static readonly POSICION_ARRIBA: "top" = "top";
	public static readonly POSICION_ABAJO: "bottom" = "bottom";


	private toast: HTMLIonToastElement;

	constructor(public toastController?: ToastController) {
	}

	public async exito(titulo: string, mensaje: string, posicion = Toastr.POSICION_ABAJO) {
		const toast = await this.toastController.create({
			header: titulo,
			message: mensaje,
			position: posicion,
			buttons: [{
				icon: 'close',
				role: 'cancel'
			}],
			duration: 5000,
			cssClass: 'exito'
		});
		toast.present();
	}

	public async error(titulo: string, mensaje: string, posicion = Toastr.POSICION_ABAJO) {
		const toast = await this.toastController.create({
			header: titulo,
			message: mensaje,
			position: posicion,
			buttons: [{
				icon: 'close',
				role: 'cancel'
			}],
			duration: 5000,
			cssClass: 'error'
		});
		toast.present();
	}


	public async alerta(titulo: string, mensaje: string, posicion = Toastr.POSICION_ABAJO) {
		const toast = await this.toastController.create({
			header: titulo,
			message: mensaje,
			position: posicion,
			buttons: [{
				icon: 'close',
				role: 'cancel'
			}],
			duration: 5000,
			cssClass: 'alerta'
		});
		toast.present();
	}


	public async info(titulo: string, mensaje: string, posicion = Toastr.POSICION_ABAJO) {
		const toast = await this.toastController.create({
			header: titulo,
			message: mensaje,
			position: posicion,
			buttons: [{
				icon: 'close',
				role: 'cancel'
			}],
			duration: 7000,
			cssClass: 'info'
		});
		toast.present();
	}

	public async cerrar() {
		if (this.toast) {
			this.toast.dismiss();
		}
	}



}


@Injectable()
export class Plataforma {
	constructor(private platform: Platform) {
	}

	get esIos() {
		return this.platform.is('ios');
	}

	get esAndroid() {
		return this.platform.is('android');
	}

	get esCordova() {
		return this.platform.is('cordova');
	}

	get esEscritorio() {
		return this.platform.is('desktop');
	}

	get esMovil() {
		return this.platform.is('mobile');
	}

	get esLandscape() {
		return this.platform.isLandscape();
	}

	get esPortrait() {
		return this.platform.isPortrait();
	}
}