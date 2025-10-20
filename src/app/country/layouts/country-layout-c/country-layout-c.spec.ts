import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLayoutC } from './country-layout-c';

describe('CountryLayoutC', () => {
  let component: CountryLayoutC;
  let fixture: ComponentFixture<CountryLayoutC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryLayoutC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryLayoutC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
