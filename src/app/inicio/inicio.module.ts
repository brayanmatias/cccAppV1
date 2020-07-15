import { ComponentesReutilizablesModule } from './../componentes-reutilizables/componentes-reutilizables.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		InicioPageRoutingModule,
		ComponentesReutilizablesModule
	],
	declarations: [InicioPage]
})
export class InicioPageModule { }
