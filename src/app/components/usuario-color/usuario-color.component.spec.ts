import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioColorComponent } from './usuario-color.component';

describe('UsuarioColorComponent', () => {
  let component: UsuarioColorComponent;
  let fixture: ComponentFixture<UsuarioColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
