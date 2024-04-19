import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSecretaireComponent } from './d-secretaire.component';

describe('DSecretaireComponent', () => {
  let component: DSecretaireComponent;
  let fixture: ComponentFixture<DSecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DSecretaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
