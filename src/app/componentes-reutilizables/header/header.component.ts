import { Component, OnInit, Input } from '@angular/core';
import { AutenticacionService } from '../../../services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	@Input() titulo: string;
	@Input() mostrarToolBar: boolean;
	@Input() menu: boolean;
	@Input() atras: boolean;
	@Input() logo: boolean;
	@Input() rutaRegresar: string;
	@Input() boton: boolean;
	@Input() iconBoton: string;

	constructor(private autenticatioService: AutenticacionService, private router: Router) {
		this.titulo = '';
		this.rutaRegresar = '/';
		this.mostrarToolBar = false;
		this.menu = false;
		this.atras = false;
		this.logo = true;
		this.boton = false;
		this.iconBoton = '';
	}

	ngOnInit() {

	}

	calendario() {
		this.router.navigate(['/mis-reservaciones']);
	}
	// async onClick() {
	// 	const user = await this.autenticatioService.getCurrentUser();
	// 	alert(JSON.stringify(user));
	// }
}
