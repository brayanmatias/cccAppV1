import { HTTP } from '@ionic-native/http/ngx';
import { Plataforma, Loader, Swal, Toastr } from 'src/services/general.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Crud } from 'src/services/crud.service';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		AppRoutingModule,
		IonicStorageModule.forRoot(),
		IonicModule.forRoot()
	],
	providers: [
		StatusBar,
		SplashScreen,
		Loader,
		Swal,
		HTTP,
		Plataforma,
		Toastr,
		Crud,
		InAppBrowser,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
