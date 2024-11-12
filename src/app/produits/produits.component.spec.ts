import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ProduitsComponent } from './produits.component';
import { Categorie } from "./categorie.model";
export class Produit {
idProduit! : number;
nomProduit! : string;
prixProduit! : number;
dateCreation! : Date ;
categorie! : Categorie;
}

describe('ProduitsComponent', () => {
  let component: ProduitsComponent;
  let fixture: ComponentFixture<ProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
