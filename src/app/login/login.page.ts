import { UsuarioApp } from './../clases/usuario.app';
import { Crud } from 'src/services/crud.service';
import { Component, OnInit, OnDestroy, AfterViewInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/utilidades/base.componet';
import { Validaciones } from 'src/utilidades/validaciones';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
	private nombreClase = 'LoginPage';
	private nombreMetodo = '';
	public usuario: DatosLogin;


	constructor(private injector: Injector, private crudService: Crud) {
		super(injector);
	}


	ngOnInit() {
		this.nombreMetodo = 'ngOnInit';
		console.log(`[${this.nombreClase}][${this.nombreMetodo}] Inicializando componente...`);
		this.usuario = new DatosLogin();
	}

	ionViewWillEnter() {
		this.menu.enable(false);
	}


	ngAfterViewInit() {
		this.nombreMetodo = 'ngAfterViewInit';
		console.log(`[${this.nombreClase}][${this.nombreMetodo}] Inicializando componente...`);

	}
	ngOnDestroy() {
		this.nombreMetodo = 'ngOnDestroy';
		console.log(`[${this.nombreClase}][${this.nombreMetodo}] Destruyendo componente...`);

	}


	/**
	 * navegar
	 */
	public navegar(destino: string) {
		switch (destino) {
			case 'registro':
				this.router.navigate(['registro']);
				break;
			case 'validar-usuario':
				this.router.navigate(['validar-usuario']);
				break;

			case 'recuperar-contrasena':
				this.router.navigate(['recuperar-contrasena']);
				break;
		}
	}


	/**
	 * entrar
	 */
	public async validar() {
		this.nombreMetodo = 'entrar';
		console.log(`[${this.nombreClase}][${this.nombreMetodo}] Validando usuario...`);
		const { data } = await this.crudService.validarLogin(this.usuario);
		alert(JSON.stringify(data));
		// this.router.navigate(['panel-de-control']);
	}

}



export class DatosLogin {
	correo: string;
	contrasena: string;

	// constructor() {
	// 	if (this.correo) {
	// 		this.correo = this.correo;
	// 	} else {
	// 		this.correo = '';
	// 	}
	// 	if (this.contrasena) {
	// 		this.contrasena = this.contrasena;
	// 	} else {
	// 		this.contrasena = '';
	// 	}
	// }


	constructor(objeto?: any) {
		if (!objeto) {
			objeto = {};
		}
		// tslint:disable-next-line: max-line-length
		if (objeto.hasOwnProperty('correo') && Validaciones.noNuloNoVacio(objeto.nombre)) { this.correo = new String(objeto.correo).valueOf(); } else { this.correo = null; }
		// tslint:disable-next-line: max-line-length
		if (objeto.hasOwnProperty('contrasena') && Validaciones.noNuloNoVacio(objeto.contrasena)) { this.contrasena = new String(objeto.contrasena).valueOf(); } else { this.contrasena = null; }
	}
}
