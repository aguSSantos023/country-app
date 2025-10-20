import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCountryP } from './by-country-p';

describe('ByCountryP', () => {
  let component: ByCountryP;
  let fixture: ComponentFixture<ByCountryP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCountryP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCountryP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
