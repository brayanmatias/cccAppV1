import { ComponentesReutilizablesModule } from './../componentes-reutilizables/componentes-reutilizables.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilSocioPageRoutingModule } from './perfil-socio-routing.module';

import { PerfilSocioPage } from './perfil-socio.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		PerfilSocioPageRoutingModule,
		ComponentesReutilizablesModule
	],
	declarations: [PerfilSocioPage]
})
export class PerfilSocioPageModule { }
