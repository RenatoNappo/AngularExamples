import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTrackbyExampleComponent } from './ng-for-trackby-example.component';

describe('NgForTrackbyExampleComponent', () => {
  let component: NgForTrackbyExampleComponent;
  let fixture: ComponentFixture<NgForTrackbyExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForTrackbyExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForTrackbyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
