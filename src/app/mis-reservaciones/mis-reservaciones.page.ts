import { Component, OnInit } from '@angular/core';
import { Crud } from '../../services/crud.service';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-mis-reservaciones',
  templateUrl: './mis-reservaciones.page.html',
  styleUrls: ['./mis-reservaciones.page.scss'],
})
export class MisReservacionesPage implements OnInit {
  reservaciones: any[] = [];
  constructor(private crud: Crud, private authService: AutenticacionService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    try {
      const user = await this.authService.getCurrentUser();
      const resp = await this.crud.getReservaciones(user.usuario_id);
      this.reservaciones = JSON.parse(resp.data);
    } catch (error) {
      alert(error);
    }

  }

}
