import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/services/auth-guard.service';

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
		path: 'ingresos',
		loadChildren: () => import('./ingresos/ingresos.module').then(m => m.IngresosPageModule)
	},
	{
		path: 'inicio',
		canActivate: [AuthGuardService],
		loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
	},
	{
		path: 'reservaciones',
		loadChildren: () => import('./reservaciones/reservaciones.module').then(m => m.ReservacionesPageModule)
	},
	{
		path: 'recuperar-contrasena',
		loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then(m => m.RecuperarContrasenaPageModule)
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	}



];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
