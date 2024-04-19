import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCoordonateurComponent } from './login-coordonateur.component';

describe('LoginCoordonateurComponent', () => {
  let component: LoginCoordonateurComponent;
  let fixture: ComponentFixture<LoginCoordonateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCoordonateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginCoordonateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
