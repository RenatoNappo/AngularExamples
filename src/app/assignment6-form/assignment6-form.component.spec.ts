import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment6FormComponent } from './assignment6-form.component';

describe('Assignment6FormComponent', () => {
  let component: Assignment6FormComponent;
  let fixture: ComponentFixture<Assignment6FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment6FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment6FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
