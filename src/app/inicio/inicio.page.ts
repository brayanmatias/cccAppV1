import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.page.html',
	styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

	constructor(private menuController: MenuController) { }

	ngOnInit() {
		this.menuController.enable(true);
	}

}
