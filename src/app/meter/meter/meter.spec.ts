import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meter } from './meter';

describe('Meter', () => {
  let component: Meter;
  let fixture: ComponentFixture<Meter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meter],
    }).compileComponents();

    fixture = TestBed.createComponent(Meter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
