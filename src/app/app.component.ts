import { Component, OnInit } from '@angular/core';
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
	public selectedIndex = 0;
	private routerOutlet: IonRouterOutlet;
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
		},
		{
			title: 'Cerrar sesión',
			url: '/login',
			icon: 'exit'
		}
	];
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private router: Router,
		private autenticatioService: AutenticacionService,
	) {
		this.initializeApp();
		this.platform.backButton.subscribeWithPriority(-1, () => {
			if (!this.routerOutlet.canGoBack()) {
				navigator['app'].exitApp();
			}
		});
		this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
			processNextHandler();
		  });
	}

	initializeApp() {
		this.platform.ready().then(async () => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}


	async ngOnInit() {
		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
		}
	}
}
