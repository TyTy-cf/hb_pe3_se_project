import { Injectable } from '@angular/core';
import {Faction} from "../models/star_wars/faction";
import {Pokedex} from "../assets/pokemon/pokedex";

@Injectable({
  providedIn: 'root'
})
export class FactionService {

  private _arrayFactions: Faction[] = [];

  constructor() {
    this._arrayFactions.push(new Faction('Empire', 'empire'));
    this._arrayFactions.push(new Faction('Rebelle', 'rebelle'));
    this._arrayFactions.push(new Faction('Mandalorien', 'mandalorien'));
  }

  get arrayFactions(): Faction[] {
    return this._arrayFactions;
  }

  getFactionBySlug(slug: string): Faction|undefined {
    for (const faction of this._arrayFactions) {
      if (faction.slug === slug) {
        return faction;
      }
    }
    return undefined;
  }
}
