import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordonateurComponent } from './coordonateur.component';

describe('CoordonateurComponent', () => {
  let component: CoordonateurComponent;
  let fixture: ComponentFixture<CoordonateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordonateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoordonateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
