import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleComunicadoPageRoutingModule } from './detalle-comunicado-routing.module';

import { DetalleComunicadoPage } from './detalle-comunicado.page';
import { ComponentesReutilizablesModule } from '../componentes-reutilizables/componentes-reutilizables.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesReutilizablesModule,
    DetalleComunicadoPageRoutingModule
  ],
  declarations: [DetalleComunicadoPage]
})
export class DetalleComunicadoPageModule {}
