import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverzitaKonaComponent } from './univerzita-kona.component';

describe('UniverzitaKonaComponent', () => {
  let component: UniverzitaKonaComponent;
  let fixture: ComponentFixture<UniverzitaKonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverzitaKonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverzitaKonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
