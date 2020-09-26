import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpWithActivityComponent } from './help-with-activity.component';

describe('HelpWithActivityComponent', () => {
  let component: HelpWithActivityComponent;
  let fixture: ComponentFixture<HelpWithActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpWithActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpWithActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
