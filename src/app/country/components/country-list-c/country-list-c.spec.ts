import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListC } from './country-list-c';

describe('CountryListC', () => {
  let component: CountryListC;
  let fixture: ComponentFixture<CountryListC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryListC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryListC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
