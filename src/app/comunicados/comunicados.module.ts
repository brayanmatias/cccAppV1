import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicadosPageRoutingModule } from './comunicados-routing.module';

import { ComunicadosPage } from './comunicados.page';
import { ComponentesReutilizablesModule } from '../componentes-reutilizables/componentes-reutilizables.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesReutilizablesModule,
    ComunicadosPageRoutingModule
  ],
  declarations: [ComunicadosPage]
})
export class ComunicadosPageModule {}
