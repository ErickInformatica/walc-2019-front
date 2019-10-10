import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Track1Component } from './track1.component';

describe('Track1Component', () => {
  let component: Track1Component;
  let fixture: ComponentFixture<Track1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Track1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Track1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
