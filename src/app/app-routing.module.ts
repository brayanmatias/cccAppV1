import { ValidacionUsuarioPageModule } from './validacion-usuario/validacion-usuario.module';
import { LoginPageModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
	},
	{
		path: 'validar-usuario',
		loadChildren: () => import('./validacion-usuario/validacion-usuario.module').then(m => m.ValidacionUsuarioPageModule)
	},
	{
		path: 'registro/:id',
		loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
	},
	{
		path: 'comunicados',
		loadChildren: () => import('./comunicados/comunicados.module').then(m => m.ComunicadosPageModule)
	},
	{
		path: 'inicio',
		// canActivate: isAute,
		loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
	},
	{
		path: 'reservaciones',
		loadChildren: () => import('./reservaciones/reservaciones.module').then(m => m.ReservacionesPageModule)
	},
	{
		path: 'detalle-comunicado',
		loadChildren: () => import('./detalle-comunicado/detalle-comunicado.module').then(m => m.DetalleComunicadoPageModule)
	},
	{
		path: 'albercas',
		loadChildren: () => import('./albercas/albercas.module').then(m => m.AlbercasPageModule)
	},
  {
    path: 'mis-reservaciones',
    loadChildren: () => import('./mis-reservaciones/mis-reservaciones.module').then( m => m.MisReservacionesPageModule)
  },




	// {
	// 	path: '',
	// 	redirectTo: 'login',
	// 	pathMatch: 'full'
	// },

];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
