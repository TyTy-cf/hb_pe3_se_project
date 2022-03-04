import {PokeApiResult} from "./poke-api-result";

export interface PokeApiAbility {
  ability: PokeApiResult;
  is_hidden: boolean;
  slot: number;
}
