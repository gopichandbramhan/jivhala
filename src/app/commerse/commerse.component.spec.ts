import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerseComponent } from './commerse.component';

describe('CommerseComponent', () => {
  let component: CommerseComponent;
  let fixture: ComponentFixture<CommerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
