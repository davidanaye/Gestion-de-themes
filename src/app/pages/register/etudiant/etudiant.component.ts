import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
  constructor(private router:Router) {

    };

  aller_a_login(){
    this.router.navigateByUrl('login-etudiant')
  }

}
