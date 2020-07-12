import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, Injector } from '@angular/core';
import { Crud } from '../../services/crud.service';
import { Usuario } from '../clases/usuario';
import { BaseComponent } from '../../utilidades/base.componet';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.page.html',
	styleUrls: ['./registro.page.scss'],
})
export class RegistroPage extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
	private nombreClase = 'RegistroPage';
	private nombreMetodo = '';
	public usuario: Usuario;
	@ViewChild('formularioRegistro') formulario;
	constructor(private injector: Injector, public crudService: Crud) {
		super(injector);
	}

	ngOnInit() {
		this.nombreMetodo = 'ngOnInit';
		console.log(`[${this.nombreClase}][${this.nombreMetodo}] Inicializando componente...`);
		this.usuario = new Usuario();
		// this.crudService.getUsuarios().then(resp => {
		// 	const datos = JSON.parse(resp.data);
		// 	console.log(JSON.stringify(datos));
		// });
	}

	onSubmit() {
		this.crudService.setUser('Hola');
	}

	ngAfterViewInit() {
		this.nombreMetodo = 'ngAfterViewInit';
		console.log(`[${this.nombreClase}][${this.nombreMetodo}] Inicializando componente...`);

	}
	ngOnDestroy() {
		this.nombreMetodo = 'ngOnDestroy';
		console.log(`[${this.nombreClase}][${this.nombreMetodo}] Destruyendo componente...`);

	}

	public async registrar() {
		alert(JSON.stringify(this.usuario));

	}


}
