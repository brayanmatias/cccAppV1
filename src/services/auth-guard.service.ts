import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';
import { Storage } from '@ionic/storage';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private router: Router, private storage: Storage) { }

	canActivate(): Promise<boolean> {
		return new Promise(resolve => {
			this.storage.get('isLoggedIn').then(result => {
				if (result) {
					resolve(true);
				} else {
					this.router.navigate(['login']);
					resolve(false);
				}
			}).catch(error => {
				resolve(false);
			})
		});
	}
}
