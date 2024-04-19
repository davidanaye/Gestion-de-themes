import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCoordonnateurComponent } from './dash-coordonnateur.component';

describe('DashCoordonnateurComponent', () => {
  let component: DashCoordonnateurComponent;
  let fixture: ComponentFixture<DashCoordonnateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashCoordonnateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashCoordonnateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
