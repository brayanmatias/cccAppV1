import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';


const TOKEN_KEY = 'auth-token';


@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {

	constructor(private storage: Storage) {
	}


	async login(usuario: any) {
		await this.storage.set(TOKEN_KEY, usuario);
		await this.storage.set('isLoggedIn', true);
	}

	async getCurrentUser() {
		return this.storage.get(TOKEN_KEY);;
	}

	logout() {
		this.storage.remove(TOKEN_KEY);
		this.storage.remove('isLoggedIn');
	}

	isAutenticated() {
		return this.storage.get('isLoggedIn');
	}
}
