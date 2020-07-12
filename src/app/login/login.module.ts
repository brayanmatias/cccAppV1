import { ComponentesReutilizablesModule } from './../componentes-reutilizables/componentes-reutilizables.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		LoginPageRoutingModule,
		ComponentesReutilizablesModule
	],
	declarations: [LoginPage]
})
export class LoginPageModule { }
