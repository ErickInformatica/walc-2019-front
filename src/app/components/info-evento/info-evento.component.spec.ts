import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEventoComponent } from './info-evento.component';

describe('InfoEventoComponent', () => {
  let component: InfoEventoComponent;
  let fixture: ComponentFixture<InfoEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
