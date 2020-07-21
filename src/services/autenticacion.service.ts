import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';


const TOKEN_KEY = 'auth-token';


@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {
	public usuarioEmmiter = new EventEmitter<any>();

	constructor(private storage: Storage) {
	}


	async login(usuario: any) {
		await Promise.all([
			this.storage.set(TOKEN_KEY, usuario),
			this.storage.set('isLoggedIn', true)
		]);
	}

	async getCurrentUser() {
		return await this.storage.get(TOKEN_KEY);
	}

	async logout() {
		await Promise.all([
			this.storage.remove(TOKEN_KEY),
			this.storage.remove('isLoggedIn')
		]);
	}

	isAutenticated(): boolean {
		return this.storage.get('isLoggedIn') ? true : false;
	}
}
