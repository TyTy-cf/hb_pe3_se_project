import {PokeApiAbility} from "./poke-api-ability";
import {PokeApiGameIndices} from "./poke-api-game-indices";
import {PokeApiResult} from "./poke-api-result";
import {PokeApiStats} from "./poke-api-stats";
import {PokeApiTypes} from "./poke-api-types";
import {PokeApiMoves} from "./poke-api-moves";
import {PokeApiSpritesFront} from "./poke-api-sprites-front";
import {PokeApiGenerationI} from "./poke-api-generation-i";

export interface PokeApiPokemon {
  id: number;
  order: number;
  name: string;
  weight: number;
  height: number;
  is_default: boolean;
  base_experience: number;
  abilities: Array<PokeApiAbility>;
  game_indices: Array<PokeApiGameIndices>;
  sprites: {
    back_default: string|null;
    back_female: string|null;
    back_shiny: string|null;
    back_shiny_female: string|null;
    front_default: string|null;
    front_female: string|null;
    front_shiny: string|null;
    front_shiny_female: string|null;
    other: {
      dream_world: {
        front_default: string|null;
        front_female: string|null;
      }
      home: PokeApiSpritesFront;
      "official-artwork": {
        front_default: string|null;
      }
    }
    versions: {
      "generation-i": {
        "red-blue": PokeApiGenerationI;
        yellow: PokeApiGenerationI;
      }
      "generation-viii": {
        icons: {
          front_default: string|null;
          front_female: string|null
        }
      }
    }
  }
  location_area_encounters: string;
  species: PokeApiResult;
  forms: Array<PokeApiResult>;
  stats: Array<PokeApiStats>;
  types: Array<PokeApiTypes>;
  moves: Array<PokeApiMoves>;
  // game_indices: Array<{game_index: number, version: PokeApiResult}>;
}


// Dans le cadre d'une classe
// c'est le get et set qui doit matcher avec l'API

// export class ClassPokeApi {
//   private _base_experience: number = 0;
//
//   get base_experience(): number {
//     return this._base_experience;
//   }
//
//   set base_experience(value: number) {
//     this._base_experience = value;
//   }
// }
