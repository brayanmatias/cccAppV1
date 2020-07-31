import { AutenticacionService } from 'src/services/autenticacion.service';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.page.html',
	styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

	constructor(private menuController: MenuController, private auth: AutenticacionService) { }

	async ngOnInit() {
		this.menuController.enable(true);
		const usuario = await this.auth.getCurrentUser();
		this.auth.usuarioEmmiter.emit(usuario);
	}

}
