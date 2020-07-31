import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { Platform, IonRouterOutlet, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
	public selectedIndex = 0;
	private routerOutlet: IonRouterOutlet;
	public usuarioSuscripcion: Subscription;
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
			url: '/perfil-socio',
			icon: 'person-circle'
		}
	];
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private screenOrientation: ScreenOrientation,
		private alertController: AlertController,
		private authService: AutenticacionService,
		private router: Router
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
			this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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

	async ngAfterViewInit() {
		if (this.authService.isAutenticated()) {
			this.usuarioSuscripcion = this.authService.usuarioEmmiter.subscribe((usuario) => {
				this.email = usuario.email;
			});
		}
	}

	public logOut() {
		this.confirmarLogOut();
	}

	async ngOnDestroy() {
		this.usuarioSuscripcion.unsubscribe();
	}


	async confirmarLogOut() {
		const alert = await this.alertController.create({
			//   cssClass: 'my-custom-class',
			header: 'Confirmar',
			message: '¿Esta seguro de cerrar la sesión?',
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
					}
				}, {
					text: 'Aceptar',
					handler: async () => {
						await this.authService.logout();
						this.router.navigate(['login']);
					}
				}
			]
		});

		await alert.present();
	}
}
