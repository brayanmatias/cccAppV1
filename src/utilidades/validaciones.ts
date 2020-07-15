import { Injectable } from '@angular/core';

@Injectable()
export class Validaciones {

	/**
	* Valida si el valor esta definido y no es nulo.
	*/
	public static noNuloNoVacio(valor: any): boolean {
		let tipo = typeof valor;
		if (valor != undefined && valor != null) {
			switch (tipo) {
				case 'string': {
					return valor != "";
				}
				case 'number': {
					return true;
				}
				case 'object': {
					return valor != {};
				}
				case 'boolean': {
					return true;
				}
				default: {
					return true;
				}
			}
		} else {
			return false;
		}
	}

}