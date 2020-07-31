import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComunicadoPage } from './detalle-comunicado.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleComunicadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleComunicadoPageRoutingModule {}
