import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleComunicadoPageRoutingModule } from './detalle-comunicado-routing.module';

import { DetalleComunicadoPage } from './detalle-comunicado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleComunicadoPageRoutingModule
  ],
  declarations: [DetalleComunicadoPage]
})
export class DetalleComunicadoPageModule {}
