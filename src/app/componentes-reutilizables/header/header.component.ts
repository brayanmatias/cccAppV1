import { Component, OnInit, Input } from '@angular/core';

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

	constructor() {
		this.titulo = '';
		this.rutaRegresar = 'login';
		this.mostrarToolBar = false;
		this.menu = false;
		this.atras = false;
		this.logo = true;
	}

	ngOnInit() {

	}

}
