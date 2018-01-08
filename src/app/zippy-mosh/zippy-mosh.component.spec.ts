import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyMoshComponent } from './zippy-mosh.component';

describe('ZippyMoshComponent', () => {
  let component: ZippyMoshComponent;
  let fixture: ComponentFixture<ZippyMoshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyMoshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyMoshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
