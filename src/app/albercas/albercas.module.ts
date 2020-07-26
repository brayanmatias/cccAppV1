import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbercasPageRoutingModule } from './albercas-routing.module';

import { AlbercasPage } from './albercas.page';
import { ComponentesReutilizablesModule } from '../componentes-reutilizables/componentes-reutilizables.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesReutilizablesModule,
    AlbercasPageRoutingModule
  ],
  declarations: [AlbercasPage]
})
export class AlbercasPageModule {}
