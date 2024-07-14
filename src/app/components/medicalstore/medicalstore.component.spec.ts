import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalstoreComponent } from './medicalstore.component';

describe('MedicalstoreComponent', () => {
  let component: MedicalstoreComponent;
  let fixture: ComponentFixture<MedicalstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalstoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
