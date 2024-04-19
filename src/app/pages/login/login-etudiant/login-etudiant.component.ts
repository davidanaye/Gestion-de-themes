import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-etudiant',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-etudiant.component.html',
  styleUrl: './login-etudiant.component.css'
})
export class LoginEtudiantComponent {

  loginForm: FormGroup;

  constructor(private router:Router) {
    this.loginForm = new FormGroup({
      ine: new FormControl(''), // INE input
      password: new FormControl(''), // Password input
      showPassword: new FormControl(false) // Checkbox
    });
  }

  togglePasswordVisibility(): void {
    this.loginForm.patchValue({
      showPassword: !this.loginForm.value.showPassword
    });
  }

  onSubmit(): void {
    console.log('Login form value:', this.loginForm.value);
  }
  aller_a_register(){
    this.router.navigateByUrl('register-etudiant')
  }
}
