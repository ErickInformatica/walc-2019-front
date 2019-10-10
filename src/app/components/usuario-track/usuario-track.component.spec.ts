import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTrackComponent } from './usuario-track.component';

describe('UsuarioTrackComponent', () => {
  let component: UsuarioTrackComponent;
  let fixture: ComponentFixture<UsuarioTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
