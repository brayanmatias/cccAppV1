export class UsuarioApp {
	fechaCreacion: Date;
	correo: string;
	usuario: string;
	usuarioId: number;
	contrasena: string;

	constructor() {
		if (!this.fechaCreacion) {
			this.fechaCreacion = new Date();
		}
	}
}