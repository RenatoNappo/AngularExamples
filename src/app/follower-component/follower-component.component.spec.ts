import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerComponentComponent } from './follower-component.component';

describe('FollowerComponentComponent', () => {
  let component: FollowerComponentComponent;
  let fixture: ComponentFixture<FollowerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
