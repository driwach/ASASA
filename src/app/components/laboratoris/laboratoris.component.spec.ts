import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorisComponent } from './laboratoris.component';

describe('LaboratorisComponent', () => {
  let component: LaboratorisComponent;
  let fixture: ComponentFixture<LaboratorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratorisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
