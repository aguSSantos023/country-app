import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundC } from './not-found-c';

describe('NotFoundC', () => {
  let component: NotFoundC;
  let fixture: ComponentFixture<NotFoundC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
