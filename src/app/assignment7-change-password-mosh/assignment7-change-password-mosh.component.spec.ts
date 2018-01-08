import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment7ChangePasswordMoshComponent } from './assignment7-change-password-mosh.component';

describe('Assignment7ChangePasswordMoshComponent', () => {
  let component: Assignment7ChangePasswordMoshComponent;
  let fixture: ComponentFixture<Assignment7ChangePasswordMoshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment7ChangePasswordMoshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment7ChangePasswordMoshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
