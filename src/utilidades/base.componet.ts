import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Loader, Swal, Toastr, Plataforma } from 'src/services/general.service';
import { constantes as constantesService } from './constantes';
import { NgModel } from '@angular/forms';

export class BaseComponent {
	private loaderService: Loader;
	private swalService: Swal;
	private toastrService: Toastr;
	private plataformaService: Plataforma;
	private routerService: Router;
	private menuControllerService: MenuController;

	constructor(injector: Injector) {
		this.loaderService = injector.get(Loader);
		this.swalService = injector.get(Swal);
		this.toastrService = injector.get(Toastr);
		this.plataformaService = injector.get(Plataforma);
		this.routerService = injector.get(Router);
		this.menuControllerService = injector.get(MenuController);
	}

	/**
     * Regresa una instancia de la clase Loader.
     */
	get loader() {
		if (this.loaderService != null && this.loaderService != undefined) {
			return this.loaderService;
		} else {
			setTimeout(() => {
				this.loader;
			});
		}
	}

	/**
     * Regresa una instancia de la clase Loader.
     */
	get menu() {
		if (this.menuControllerService != null && this.menuControllerService != undefined) {
			return this.menuControllerService;
		} else {
			setTimeout(() => {
				this.menuControllerService;
			});
		}
	}


	/**
	* Regresa una instancia de la clase Swal.
	*/
	get swal() {
		if (this.swalService != null && this.swalService != undefined) {
			return this.swalService;
		} else {
			setTimeout(() => {
				this.swal;
			});
		}
	}

    /**
     * Regresa una instancia de la clase Swal.
     */
	get toastr() {
		if (this.toastrService != null && this.toastrService != undefined) {
			return this.toastrService;
		} else {
			setTimeout(() => {
				this.toastr;
			});
		}
	}


	/**
     * Regresa una instancia de la clase Router.
     */
	get router() {
		if (this.routerService != null && this.routerService != undefined) {
			return this.routerService;
		} else {
			setTimeout(() => {
				this.router;
			});
		}
	}


	/**
	* Regresa plataforma de la aplicacion.
	*/
	get plataforma() {
		if (this.plataformaService != null && this.plataformaService != undefined) {
			return this.plataformaService;
		} else {
			setTimeout(() => {
				this.plataforma;
			});
		}
	}


	/**
     * Regresa las constantes de la aplicacion.
     */
	get constantes() {
		if (constantesService != null && constantesService != undefined) {
			return constantesService;
		} else {
			setTimeout(() => {
				this.constantes;
			});
		}
	}


	/**
     * Evento Keydown que sirve para solo admitir números decimales en los input
     */
	public numeroDecimal(e: KeyboardEvent) {
		var nav4 = window.event ? true : false;
		var key = nav4 ? e.which : e.keyCode;
		return (key <= 13 || (key >= 48 && key <= 57) || key == 46);
	}

    /**
     * Evento Keydown que sirve para solo admitir números enteros en los input
     */
	public numeroEntero(e: KeyboardEvent) {
		var nav4 = window.event ? true : false;
		var key = nav4 ? e.which : e.keyCode;
		return (key <= 13 || (key >= 48 && key <= 57));
	}


	public existeError(model: NgModel, error?: string, dirty: boolean = true): boolean {
		let existeError = false;
		if (model && model.errors && ((dirty && model.dirty) || !dirty)) {
			if (error) {
				existeError = model.errors[error];
			} else {
				existeError = true;
			}
		}
		return existeError;
	}




}
