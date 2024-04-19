import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router} from '@angular/router';

import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Coordonateur } from './coordonateur.model';

@Component({
  selector: 'app-dash-coordonnateur',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, ReactiveFormsModule,FormsModule,MatIconModule],
  templateUrl: './dash-coordonnateur.component.html',
  styleUrl: './dash-coordonnateur.component.css'
})


export class DashCoordonnateurComponent {
  coordonateur: Coordonateur[] = [
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
  bin: Coordonateur[] = [];
  input: Coordonateur = { lname: '', fname: '', age: 0, job: '', address: '' };
  editInput: Coordonateur = { lname: '', fname: '', age: 12, job: '', address: '' };


  constructor() {}

  add(): void {
    this.coordonateur.push({...this.input});
    this.input = { lname: '', fname: '', age: 0, job: '', address: '' };
    this.coordonateur.sort((a, b) => a.lname.localeCompare(b.lname));
  }

  edit(index: number): void {
    this.editInput = {...this.coordonateur[index]};
    this.coordonateur.splice(index, 1);
  }

  archive(index: number): void {
    this.bin.push(this.coordonateur[index]);
    this.coordonateur.splice(index, 1);
    this.bin.sort((a, b) => a.lname.localeCompare(b.lname));
  }

  restore(index: number): void {
    this.coordonateur.push(this.bin[index]);
    this.bin.splice(index, 1);
    this.coordonateur.sort((a, b) => a.lname.localeCompare(b.lname));
  }

  update(): void {
    this.coordonateur.push({...this.editInput});
    this.editInput = { lname: '', fname: '', age: 0, job: '', address: '' };
    this.coordonateur.sort((a, b) => a.lname.localeCompare(b.lname));
  }

  deplete(index: number): void {
    this.bin.splice(index, 1);
  }
}
