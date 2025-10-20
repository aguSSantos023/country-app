import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRegionP } from './by-region-p';

describe('ByRegionP', () => {
  let component: ByRegionP;
  let fixture: ComponentFixture<ByRegionP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByRegionP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByRegionP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
