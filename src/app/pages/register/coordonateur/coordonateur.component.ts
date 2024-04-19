import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-coordonateur',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './coordonateur.component.html',
  styleUrls: ['./coordonateur.component.css']
})
export class CoordonateurComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,private renderer: Renderer2) {
    this.form = this.fb.group({
      colorPicker: ['#ffffff'] // Couleur initiale pour le sélecteur de couleur
    });

}
  // Méthode pour traiter la valeur de couleur choisie et appliquer le style
  onColorChange(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    this.applyColor(color);
  }

  private applyColor(color: string): void {
    document.body.style.backgroundColor = color; // Applique la couleur à l'arrière-plan du corps du document
    // Supposons que vous avez un élément avec l'ID 'formCard' que vous souhaitez colorer
    const formCard = document.getElementById('formCard');
    if (formCard) {
      formCard.style.backgroundColor = color;
    }
  }

  // Méthodes supplémentaires ...
}
