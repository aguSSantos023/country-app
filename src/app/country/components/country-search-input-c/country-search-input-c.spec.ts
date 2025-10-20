import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySearchInputC } from './country-search-input-c';

describe('CountrySearchInputC', () => {
  let component: CountrySearchInputC;
  let fixture: ComponentFixture<CountrySearchInputC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySearchInputC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrySearchInputC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
