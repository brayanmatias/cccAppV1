import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { ModalContrasenaPage } from './modal-contrasena.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule
	],
	declarations: [ModalContrasenaPage],
	exports: [ModalContrasenaPage]
})
export class ModalContrasenaPageModule { }
