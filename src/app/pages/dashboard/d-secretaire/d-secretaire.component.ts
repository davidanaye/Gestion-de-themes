import { Component } from '@angular/core';
import { Secretaire } from './secretaire.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-d-secretaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './d-secretaire.component.html',
  styleUrl: './d-secretaire.component.css'
})
export class DSecretaireComponent {
  secretaire: Secretaire[] = [
    { lname: 'Doe', fname: 'John', age: 30, job: 'Manager', address: '123 Main St' },
    { lname: 'Smith', fname: 'Jane', age: 25, job: 'Developer', address: '456 Elm St' },
    { lname: 'Doe', fname: 'John', age: 30, job: 'Manager', address: '123 Main St' },
    { lname: 'Smith', fname: 'Jane', age: 25, job: 'Developer', address: '456 Elm St' },
    { lname: 'Doe', fname: 'John', age: 30, job: 'Manager', address: '123 Main St' },
    { lname: 'Smith', fname: 'Jane', age: 25, job: 'Developer', address: '456 Elm St' },
    { lname: 'Doe', fname: 'John', age: 30, job: 'Manager', address: '123 Main St' },
    { lname: 'Smith', fname: 'Jane', age: 25, job: 'Developer', address: '456 Elm St' },
    { lname: 'Doe', fname: 'John', age: 30, job: 'Manager', address: '123 Main St' },
    { lname: 'Smith', fname: 'Jane', age: 25, job: 'Developer', address: '456 Elm St' },
    { lname: 'Doe', fname: 'John', age: 30, job: 'Manager', address: '123 Main St' },
    { lname: 'Smith', fname: 'Jane', age: 25, job: 'Developer', address: '456 Elm St' },
    // Ajoute d'autres données si nécessaire
  ];
  bin: Secretaire[] = [];
  input: Secretaire = { lname: '', fname: '', age: 0, job: '', address: '' };
  editInput: Secretaire = { lname: '', fname: '', age: 12, job: '', address: '' };


  constructor() {}

  add(): void {
    this.secretaire.push({...this.input});
    this.input = { lname: '', fname: '', age: 0, job: '', address: '' };
    this.secretaire.sort((a, b) => a.lname.localeCompare(b.lname));
  }

  edit(index: number): void {
    this.editInput = {...this.secretaire[index]};
    this.secretaire.splice(index, 1);
  }

  archive(index: number): void {
    this.bin.push(this.secretaire[index]);
    this.secretaire.splice(index, 1);
    this.bin.sort((a, b) => a.lname.localeCompare(b.lname));
  }

  restore(index: number): void {
    this.secretaire.push(this.bin[index]);
    this.bin.splice(index, 1);
    this.secretaire.sort((a, b) => a.lname.localeCompare(b.lname));
  }

  update(): void {
    this.secretaire.push({...this.editInput});
    this.editInput = { lname: '', fname: '', age: 0, job: '', address: '' };
    this.secretaire.sort((a, b) => a.lname.localeCompare(b.lname));
  }

  deplete(index: number): void {
    this.bin.splice(index, 1);
  }

}
