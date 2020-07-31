import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarContrasenaPageRoutingModule } from './recuperar-contrasena-routing.module';

import { RecuperarContrasenaPage } from './recuperar-contrasena.page';
import { ComponentesReutilizablesModule } from '../componentes-reutilizables/componentes-reutilizables.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarContrasenaPageRoutingModule,
    ComponentesReutilizablesModule
  ],
  declarations: [RecuperarContrasenaPage]
})
export class RecuperarContrasenaPageModule {}
