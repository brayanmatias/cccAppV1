import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilSocioPage } from './perfil-socio.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilSocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilSocioPageRoutingModule {}
