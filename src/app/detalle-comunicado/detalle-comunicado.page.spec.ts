import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleComunicadoPage } from './detalle-comunicado.page';

describe('DetalleComunicadoPage', () => {
  let component: DetalleComunicadoPage;
  let fixture: ComponentFixture<DetalleComunicadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleComunicadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleComunicadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
