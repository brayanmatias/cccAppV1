import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';


const TOKEN_KEY = 'auth-token';


@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {

	autenticationState = new BehaviorSubject(false);

	constructor(private storage: Storage) {
	}


	async login(usuario: any) {
		await this.storage.set(TOKEN_KEY, usuario);
		this.autenticationState.next(true);
	}

	logout() {
		this.storage.remove(TOKEN_KEY);
		this.autenticationState.next(false);
	}

	isAutenticated() {
		return this.autenticationState.value;
	}
}
