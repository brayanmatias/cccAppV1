import { Component, OnInit, Input } from '@angular/core';
import { AutenticacionService } from '../../../services/autenticacion.service';

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

	constructor(private autenticatioService: AutenticacionService) {
		this.titulo = '';
		this.rutaRegresar = 'login';
		this.mostrarToolBar = false;
		this.menu = false;
		this.atras = false;
		this.logo = false;
	}

	ngOnInit() {

	}

	// async onClick() {
	// 	const user = await this.autenticatioService.getCurrentUser();
	// 	alert(JSON.stringify(user));
	// }
}
