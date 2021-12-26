import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import { Observable } from 'rxjs';

export class Commande {

  public numero: string;
  public prixTotal: number;
  public etat: number;
  constructor( numero : string, prixTotal : number, etat:number) {
    this.numero = numero;
    this.prixTotal= prixTotal;
    this.etat=etat;

  }
}
@Injectable({
  providedIn: 'root'
})




export class CreerCommandeService {

  baseUrl = environment. apiUrl;
  private COMMANDE_PATH = '/commandes';
  private CREATE_PATH = '/add';
  private headers: HttpHeaders | undefined;
  constructor(private http:HttpClient) {
  }

   getCommandes():Observable<Commande[]>{
    let url;

     url = this.baseUrl + this.COMMANDE_PATH;
    this.headers = new HttpHeaders({
      'Content-Type':  'application/json',

    });
      return this.http.get<Commande[]>(url, {'headers': this.headers});

  }

  postCommande(commandeC : Commande) {
    let postUrl;
    postUrl = this.baseUrl + this.CREATE_PATH;
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(commandeC);
    return this.http.post(postUrl,
      body, {'headers': headers});

  }
}
