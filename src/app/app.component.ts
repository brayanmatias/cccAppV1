import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage as storage } from '@ionic/storage';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	@ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet;
	public selectedIndex = 0;
	public appPages = [
		{
			title: 'Inbox',
			url: '/folder/Inbox',
			icon: 'mail'
		},
		{
			title: 'Outbox',
			url: '/folder/Outbox',
			icon: 'paper-plane'
		},
		{
			title: 'Favorites',
			url: '/folder/Favorites',
			icon: 'heart'
		},
		{
			title: 'Archived',
			url: '/folder/Archived',
			icon: 'archive'
		},
		{
			title: 'Trash',
			url: '/folder/Trash',
			icon: 'trash'
		},
		{
			title: 'Spam',
			url: '/folder/Spam',
			icon: 'warning'
		}
	];
	public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		// private storage: Storage,
		private statusBar: StatusBar,
		private router: Router
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
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


	ngOnInit() {
		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
		}
	}
}
