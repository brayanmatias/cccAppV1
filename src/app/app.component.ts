import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage as storage } from '@ionic/storage';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	@ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet;
	public selectedIndex = 0;
	public email: string;
	public appPages = [
		{
			title: 'Inicio',
			url: '/inicio',
			icon: 'home'
		},
		{
			title: 'Comunicados',
			url: '/comunicados',
			icon: 'bookmark'
		},
		{
			title: 'Alberca',
			url: '/albercas',
			icon: 'thermometer'
		},
		{
			title: 'Reservaciones',
			url: '/reservaciones',
			icon: 'book'
		},
		{
			title: 'Ingresos',
			url: '/ingresos',
			icon: 'wallet'
		},
		{
			title: 'Perfil Socio',
			url: '/user',
			icon: 'person-circle'
		}
	];
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		// private storage: Storage,
		private statusBar: StatusBar,
		private router: Router,
		private autenticatioService: AutenticacionService,
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(async () => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();

			const isLoggeIn = await this.autenticatioService.isAutenticated();
			if (isLoggeIn) {
				const user = await this.autenticatioService.getCurrentUser();
				this.email = user.email;
				this.router.navigate(['inicio']);
			} else {
				this.router.navigate(['login']);
			}
		});
	}

	/**
 * inicializaBotonAtras
 */
	public inicializaBotonAtras() {
		this.platform.backButton.subscribe(() => {
			if (!this.routerOutlet.canGoBack()) {
				navigator['app'].exitApp();
			}

			if(this.router.url.includes('login')){
				navigator['app'].exitApp();
			}
		});
	}


	async ngOnInit() {
		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
		}
	}
}
