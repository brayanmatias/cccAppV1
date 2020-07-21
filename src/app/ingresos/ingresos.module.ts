import { ComponentesReutilizablesModule } from './../componentes-reutilizables/componentes-reutilizables.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IngresosPageRoutingModule } from './ingresos-routing.module';
import { IngresosPage } from './ingresos.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		IngresosPageRoutingModule,
		ComponentesReutilizablesModule
	],
	declarations: [IngresosPage]
})
export class IngresosPageModule { }
