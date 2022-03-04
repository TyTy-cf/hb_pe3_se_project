import {PokeApiResult} from "./poke-api-result";

export interface PokeApiRequest {
  next: string|null;
  previous: string|null;
  results: Array<PokeApiResult>;
  // results: PokeApiResult[];
}
