import { Injectable } from '@angular/core';
import {Pokedex} from "../assets/pokemon/pokedex";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly _arrayPokedex: Pokedex[] = [];

  constructor() {
    // InSERT INTO...
    this._arrayPokedex.push(new Pokedex('Génération 1', 1, 151, 'generation-1'));
    this._arrayPokedex.push(new Pokedex('Génération 2', 152, 251, 'generation-2'));
    this._arrayPokedex.push(new Pokedex('Génération 3', 252, 384, 'generation-3'));
    this._arrayPokedex.push(new Pokedex('Génération 4', 385, 493, 'generation-4'));
    this._arrayPokedex.push(new Pokedex('Génération 5', 494, 649, 'generation-5'));
    this._arrayPokedex.push(new Pokedex('Génération 6', 650, 721, 'generation-6'));
    this._arrayPokedex.push(new Pokedex('Génération 7', 722, 809, 'generation-7'));
    this._arrayPokedex.push(new Pokedex('Génération 8', 810, 898, 'generation-8'));
    this._arrayPokedex.push(new Pokedex('National', 1, 898, 'national'));
  }

  // SELECT * FROM pokedex WHERE slug = PARAM
  getPokedexBySlug(slug: string): Pokedex|undefined {
    for (const pokedex of this._arrayPokedex) {
      if (pokedex.slug === slug) {
        return pokedex;
      }
    }
    return undefined;
  }

  // SELECT * FROM POKEDEX
  get arrayPokedex(): Pokedex[] {
    return this._arrayPokedex;
  }
}
