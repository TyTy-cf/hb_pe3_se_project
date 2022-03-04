import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokeApiRequest} from "../models/api-pokemon/poke-api-request";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private urlPokedex: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) { }

  getPokedex(urlPagination: string = this.urlPokedex): Observable<PokeApiRequest>  {
    return this.httpClient.get<PokeApiRequest>(urlPagination);
  }
}
