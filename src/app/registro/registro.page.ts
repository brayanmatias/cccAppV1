import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, Injector } from '@angular/core';
import { Crud } from '../../services/crud.service';
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
		const id = this.activatedRoute.snapshot.paramMap.get('id');
		this.usuario = new UsuarioApp();
		this.usuario.usuarioId = Number(id);
	}

	onSubmit() {
		console.log(this.usuario);
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
		try {
			this.loader.abrir();
			const { data } = await this.crudService.crearUsuario(this.usuario);
			const resultado = JSON.parse(data);
			if (resultado.success) {
				this.toastr.exito('Éxito', 'Usuario registrado con éxito!');
				this.router.navigate(['login']);
			}
		} catch (error) {
			this.toastr.error('Error', 'Error al registrar el usuario!');
		} finally{
			this.loader.cerrar();
		}


		// if(resultado.includes('Duplicate entry')){
		// 	this.swal.error('Error', 'El usuario ya está registrado');
		// } 
		// if(resultadoJson.success){

		// }

	}


}
