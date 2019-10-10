import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueieneSomosComponent } from './queiene-somos.component';

describe('QueieneSomosComponent', () => {
  let component: QueieneSomosComponent;
  let fixture: ComponentFixture<QueieneSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueieneSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueieneSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
