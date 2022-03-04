import {PokeApiResult} from "./poke-api-result";
import {PokeApiVersionGroupDetails} from "./poke-api-version-group-details";

export interface PokeApiMoves {
  move: PokeApiResult;
  version_group_details: Array<PokeApiVersionGroupDetails>;
}
