import { Component, OnInit } from '@angular/core';
import {Commande, CreerCommandeService} from "../creer-commande.service";
import stringContaining = jasmine.stringContaining;

export class CommandeModel {

  public numero: string;
  public prixTotal: number;
  public etat: number;
  constructor( numero : string, prixTotal : number, etat:number) {
    this.numero = numero;
    this.prixTotal= prixTotal;
    this.etat=etat;

  }
}
@Component({
  selector: 'app-creer-commande',
  templateUrl: './creer-commande.component.html',
  styleUrls: ['./creer-commande.component.css']
})
export class CreerCommandeComponent implements OnInit {
   public getcommande: CommandeModel []=[];
   commandeC: Commande;
  constructor( private creerCommandeService: CreerCommandeService) { }

  ngOnInit(): void {
    this.creerCommandeService.getCommandes().subscribe(value=>{
      this.getcommande = value;
      console.log("commande", this.getcommande);
    });

  }

  getCommandes() {
    this.creerCommandeService.getCommandes().subscribe(value=>{
      this.getcommande = value;
      console.log("commande", this.getcommande);
    });
  }
  createCommande(){

    this.commandeC.numero = this.commandeC.numero;
    this.commandeC.etat = this.commandeC.etat;
    this.commandeC.prixTotal= this.commandeC.prixTotal;

    this.creerCommandeService.postCommande(this.commandeC).subscribe(data=>{
      this.commandeC= data;


    });
  }
}
