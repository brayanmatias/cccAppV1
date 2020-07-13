import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, Injector } from '@angular/core';
import { Crud } from '../../services/crud.service';
import { Usuario } from '../clases/usuario';
import { BaseComponent } from '../../utilidades/base.componet';
import { ActivatedRoute } from '@angular/router';
import { UsuarioApp } from '../clases/usuario.app';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.page.html',
	styleUrls: ['./registro.page.scss'],
})
export class RegistroPage extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
	private nombreClase = 'RegistroPage';
	private nombreMetodo = '';
	public usuario: UsuarioApp;
	@ViewChild('formularioRegistro') formulario;
	constructor(private injector: Injector, public crudService: Crud, private activatedRoute: ActivatedRoute) {
		super(injector);
	}

	ngOnInit() {
		this.nombreMetodo = 'ngOnInit';
		console.log(`[${this.nombreClase}][${this.nombreMetodo}] Inicializando componente...`);
		let id = this.activatedRoute.snapshot.paramMap.get('id');
		this.usuario = new UsuarioApp();
		this.usuario.usuario_id = Number(id);
	}

	onSubmit() {
		console.log(this.usuario);
		
		// this.crudService.setUser('Hola');
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
		console.log(this.usuario);
		// alert(JSON.stringify(this.usuario));

	}


}
