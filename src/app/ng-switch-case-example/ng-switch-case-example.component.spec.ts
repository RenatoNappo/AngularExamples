import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchCaseExampleComponent } from './ng-switch-case-example.component';

describe('NgSwitchCaseExampleComponent', () => {
  let component: NgSwitchCaseExampleComponent;
  let fixture: ComponentFixture<NgSwitchCaseExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchCaseExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchCaseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
