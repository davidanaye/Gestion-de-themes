import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginEtudiantComponent } from './pages/login/login-etudiant/login-etudiant.component';
import { EtudiantComponent } from './pages/register/etudiant/etudiant.component';
import { CoordonateurComponent } from './pages/register/coordonateur/coordonateur.component';
import { LoginCoordonateurComponent } from './pages/login/login-coordonateur/login-coordonateur.component';
import { SecretaireComponent } from './pages/register/secretaire/secretaire.component';
import { LoginSecretaireComponent } from './pages/login/login-secretaire/login-secretaire.component';

import { DSecretaireComponent } from './pages/dashboard/d-secretaire/d-secretaire.component';

import { DashCoordonnateurComponent } from './pages/dashboard/dash-coordonnateur/dash-coordonnateur.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { EspaceEtudiantComponent } from './pages/dashboard/espace-etudiant/espace-etudiant.component';

export const routes: Routes = [

  {
    path:'login-etudiant',
    component:LoginEtudiantComponent
},
{
  path:'register-etudiant',
  component:EtudiantComponent
},
{
  path:'register-coordonateur',
  component:CoordonateurComponent
},

{
  path:'login-coordonateur',
  component:LoginCoordonateurComponent
},
{
  path:'login-secretaire',
  component:LoginSecretaireComponent
},
{
  path:'login-secretaire',
  component:SecretaireComponent
},


{
  path:'login-d_coordonateur',
  component:DashCoordonnateurComponent
},

{
  path:'login-d_secretaire',
  component:DSecretaireComponent
},
{
  path:'',
  component:AccueilComponent
},
{
  path:'etudiant',
  component:EspaceEtudiantComponent
},



];
