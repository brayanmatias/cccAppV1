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
		path: 'registro',
		loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
