import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  // A supprimer et refaire correctement pour l'exercice
  private readonly arrayPokedex: number[] = [];

  constructor() {
    this.arrayPokedex = [151, 251, 384];
  }

  get pokedex(): number[] {
    return this.arrayPokedex;
  }
}
