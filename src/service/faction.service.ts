import { Injectable } from '@angular/core';
import {Faction} from "../models/star_wars/faction";

@Injectable({
  providedIn: 'root'
})
export class FactionService {

  private _arrayFactions: Faction[] = [];

  constructor() {
    this._arrayFactions.push(new Faction('Empire', 'empire', '#ff0000'));
    this._arrayFactions.push(new Faction('Rebelle', 'rebelle', '#0000ff'));
    this._arrayFactions.push(new Faction('Mandalorien', 'mandalorien', '#33cc33'));
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
