
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Socio } from 'src/app/clases/socio';
import { UsuarioApp } from '../app/clases/usuario.app';
import { FechaDate } from 'src/utilidades/fechas';

@Injectable()
export class Crud {
	private api = 'https://cccapis.000webhostapp.com/apiPhpForMobile/apiPhpForMobile';
	header = { 'Content-Type': 'application/json' };

	constructor(private http: HTTP) {

	}

	getUsuarios() {
		return this.http.get(this.api + '/usuario/usuario.php', {}, {});
	}


	setUser(datos) {
		return this.http.post(this.api + '/usuario/usuario.php', datos, this.header);
	}


	crearUsuario(usuario: UsuarioApp) {
		this.http.setDataSerializer('json');
		return this.http.post(this.api + '/usuario/usuario-crear.php', usuario, this.header);
	}


	validarLogin(usuario: any) {
		this.http.setDataSerializer('json');
		return this.http.post(this.api + '/usuario/usuario-obtener.php', usuario, this.header);
	}

	validarSocio(socioEdicion: Socio) {
		this.http.setDataSerializer('json');
		return this.http.post(this.api + '/socio/validarSocio.php', socioEdicion, this.header);
	}

	getComunicados() {
		return this.http.get(this.api + '/comunicados/obtenerComunicados.php', {}, {});
	}

	getHorarios(data) {
		this.http.setDataSerializer('json');
		return this.http.post(this.api + '/reservaciones/obtener-horarios.php', data, this.header);
	}

	getReservaciones(idSocio){
		return this.http.get(this.api + '/reservaciones/obtener-reservaciones.php?id_socio=' + idSocio, {}, {});
	}

	getInformacion() {
		return this.http.get(this.api + '/reservaciones/obtener-areas.php', {}, {});
	}

	getTemperaturas() {
		return this.http.get(this.api + '/albercas/obtenerTemperaturas.php', {}, {});
	}

	getPerfilSocio(usuarioId: string) {
		return this.http.get(this.api + '/socio/obtener-perfil-socio.php?id=' + usuarioId, {}, {});
	}

	getIngresos(usuarioId: string) {
		const fechaFin = FechaDate.fechaString(new Date());
		const fechaInicio = FechaDate.fechaString(FechaDate.restaDias(new Date(), 7));
		// tslint:disable-next-line: max-line-length
		return this.http.get(this.api + '/ingresos/obtener-ingresos.php?id=' + usuarioId + '&fechaInicio=' + fechaInicio + '&fechaFin=' + fechaFin, {}, {});
	}
}
