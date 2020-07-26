import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlbercasPage } from './albercas.page';

describe('AlbercasPage', () => {
  let component: AlbercasPage;
  let fixture: ComponentFixture<AlbercasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbercasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbercasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
