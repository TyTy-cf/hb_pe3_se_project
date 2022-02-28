import { Injectable } from '@angular/core';
import {Starship} from "../models/star_wars/starship";
import {FactionService} from "./faction.service";
import {Faction} from "../models/star_wars/faction";

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  _arrayStarships: Starship[] = [];

  constructor(private factionService: FactionService) {
    const empire = this.factionService.getFactionBySlug('empire');
    if (empire) {
      this._arrayStarships.push(new Starship("TIE/LN starfighter", "tie-starfighter", empire));
      this._arrayStarships.push(new Starship("Intercepteur TIE","intercepteur-tie", empire));
      this._arrayStarships.push(new Starship("Advanced TIE", "advanced-tie", empire));
      this._arrayStarships.push(new Starship("Navette T-4a", "navette-t-4a", empire));
      this._arrayStarships.push(new Starship("Star Destroyer", "star-destroyer", empire));
    }

    const rebelle = this.factionService.getFactionBySlug('rebelle');
    if (rebelle) {
      this._arrayStarships.push(new Starship("X-Wing","x-wing", rebelle));
    }
  }

  getStarshipsByFaction(faction: Faction): Starship[] {
    // Ces codes sont identiques, la fonction filter vous fait exactement ce code :

    // let tmpArray: Starship[] = [];
    // for (const starship of this._arrayStarships) {
    //   if (starship.faction === faction) {
    //     tmpArray.push(starship);
    //   }
    // }
    // return tmpArray;

    // Exemple de suppression dans un tableau via la fonction filter
    // this._arrayStarships = this._arrayStarships.filter((starship) =>
    //   starship.faction !== faction
    // );

    // filter prends en paramètre une fonction anonyme (fléchée)
    // le paramètre est le nom donné à la valeur de l'itération
    // (ici c'est le même que pour mon for..of du dessus)
    // et dans la fonction anonyme, on indique la condition
    // pour mettre les éléments dans le nouveau tableau
    return this._arrayStarships.filter((starship) =>
      starship.faction === faction
    );
  }

}
