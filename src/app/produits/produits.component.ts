import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
  
})

  export class ProduitsComponent implements OnInit {
    produits : string[]; //un tableau de chînes de caractères
    
  }
