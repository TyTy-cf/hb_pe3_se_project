import { Component, OnInit } from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";
import {PokeApiRequest} from "../../models/api-pokemon/poke-api-request";

@Component({
  selector: 'app-api-pokedex',
  templateUrl: './api-pokedex.component.html',
  styleUrls: ['./api-pokedex.component.scss']
})
export class ApiPokedexComponent implements OnInit {

  pokeApiRequest: PokeApiRequest|undefined;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.getPokedex().subscribe((apiJson) => {
        console.log(apiJson.results);
        this.pokeApiRequest = apiJson;
      }
    );
  }

}
