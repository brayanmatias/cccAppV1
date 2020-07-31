import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Comunicado } from '../clases/comunicado';
import { Subscription } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-detalle-comunicado',
  templateUrl: './detalle-comunicado.page.html',
  styleUrls: ['./detalle-comunicado.page.scss'],
})
export class DetalleComunicadoPage implements OnInit, OnDestroy {

  comunicado: Comunicado = new Comunicado();
  observable: Subscription;
  constructor(private router: Router,
              private inAppBrowser: InAppBrowser,
              private activateRoute: ActivatedRoute) { }

  ngOnDestroy(): void {
    if(this.observable !== undefined) {
      this.observable.unsubscribe();
    }
  }

  async ngOnInit() {
    this.observable = await this.activateRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.comunicado = this.router.getCurrentNavigation().extras.state.comunicado;
      }
    });
  }

  openPage(url: string) {
    this.inAppBrowser.create(url, '_system')
  }

}
