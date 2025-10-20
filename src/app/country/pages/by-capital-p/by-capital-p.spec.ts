import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCapitalP } from './by-capital-p';

describe('ByCapitalP', () => {
  let component: ByCapitalP;
  let fixture: ComponentFixture<ByCapitalP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCapitalP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCapitalP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
