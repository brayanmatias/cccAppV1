import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisReservacionesPageRoutingModule } from './mis-reservaciones-routing.module';

import { MisReservacionesPage } from './mis-reservaciones.page';
import { ComponentesReutilizablesModule } from '../componentes-reutilizables/componentes-reutilizables.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesReutilizablesModule,
    MisReservacionesPageRoutingModule
  ],
  declarations: [MisReservacionesPage]
})
export class MisReservacionesPageModule {}
