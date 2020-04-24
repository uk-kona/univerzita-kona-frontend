import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpByActivityComponent } from './help-by-activity.component';

describe('HelpByActivityComponent', () => {
  let component: HelpByActivityComponent;
  let fixture: ComponentFixture<HelpByActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpByActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpByActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
