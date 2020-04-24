import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpFinanciallyComponent } from './help-financially.component';

describe('HelpFinanciallyComponent', () => {
  let component: HelpFinanciallyComponent;
  let fixture: ComponentFixture<HelpFinanciallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpFinanciallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpFinanciallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
