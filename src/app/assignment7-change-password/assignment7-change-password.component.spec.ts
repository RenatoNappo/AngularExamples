import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment7ChangePasswordComponent } from './assignment7-change-password.component';

describe('Assignment7ChangePasswordComponent', () => {
  let component: Assignment7ChangePasswordComponent;
  let fixture: ComponentFixture<Assignment7ChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment7ChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment7ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
