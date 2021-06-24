import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpositionComponent } from './studentposition.component';

describe('StudentpositionComponent', () => {
  let component: StudentpositionComponent;
  let fixture: ComponentFixture<StudentpositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
