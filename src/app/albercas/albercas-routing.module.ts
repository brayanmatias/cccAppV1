import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbercasPage } from './albercas.page';

const routes: Routes = [
  {
    path: '',
    component: AlbercasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbercasPageRoutingModule {}
