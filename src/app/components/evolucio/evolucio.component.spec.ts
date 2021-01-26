import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucioComponent } from './evolucio.component';

describe('EvolucioComponent', () => {
  let component: EvolucioComponent;
  let fixture: ComponentFixture<EvolucioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
