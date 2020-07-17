import { Component, OnInit, Injector } from '@angular/core';
import { Crud } from '../../services/crud.service';
import { BaseComponent } from '../../utilidades/base.componet';

@Component({
	selector: 'app-comunicados',
	templateUrl: './comunicados.page.html',
	styleUrls: ['./comunicados.page.scss'],
})
export class ComunicadosPage extends BaseComponent implements OnInit {
	comunicados: any[] = [];
	constructor(private crudService: Crud, private injector: Injector) { 
		super(injector);
	}

	async ngOnInit() {
		this.loader.abrir();
		await this.loadData();
		this.loader.cerrar();
	}

	async loadData() {
		this.crudService.getComunicados().then(resp => {
			this.comunicados = JSON.parse(resp.data);
		}).catch(e => {
			console.error(JSON.stringify(e));
		});
	}

}
