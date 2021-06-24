import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbestComponent } from './ourbest.component';

describe('OurbestComponent', () => {
  let component: OurbestComponent;
  let fixture: ComponentFixture<OurbestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurbestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurbestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
