import { ComponentesReutilizablesModule } from './../componentes-reutilizables/componentes-reutilizables.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidacionUsuarioPageRoutingModule } from './validacion-usuario-routing.module';

import { ValidacionUsuarioPage } from './validacion-usuario.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ValidacionUsuarioPageRoutingModule,
		FormsModule,
		ComponentesReutilizablesModule,
		ReactiveFormsModule
	],
	declarations: [ValidacionUsuarioPage]
})
export class ValidacionUsuarioPageModule { }
