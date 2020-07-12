import { Component, OnInit, OnDestroy, AfterViewInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/utilidades/base.componet';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
	private nombreClase = 'LoginPage';
	private nombreMetodo = '';
	public correo: string = '';
	public contrasena: string = '';


	constructor(private injector: Injector) {
		super(injector);
	}


	ngOnInit() {
		this.nombreMetodo = 'ngOnInit';
		console.log(`[${this.nombreClase}][${this.nombreMetodo}] Inicializando componente...`);
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
	public entrar() {
		this.nombreMetodo = 'entrar';
		console.log(`[${this.nombreClase}][${this.nombreMetodo}] Entrando...`);
		this.router.navigate(['panel-de-control']);
	}

}
