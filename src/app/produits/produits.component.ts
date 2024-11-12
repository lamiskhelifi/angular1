import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
  
})

import { Produit } from '../model/produit.model';
export class ProduitsComponent implements OnInit {
medicaments : Medicament[]; //un tableau de Produit //un tableau de chînes de caractères
    
  }
