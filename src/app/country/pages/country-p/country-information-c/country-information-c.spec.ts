import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInformationC } from './country-information-c';

describe('CountryInformationC', () => {
  let component: CountryInformationC;
  let fixture: ComponentFixture<CountryInformationC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryInformationC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryInformationC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
