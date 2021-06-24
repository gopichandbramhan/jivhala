import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { College1Component } from './college1.component';

describe('College1Component', () => {
  let component: College1Component;
  let fixture: ComponentFixture<College1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ College1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(College1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
