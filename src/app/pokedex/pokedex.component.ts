import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  arrayPokemonIndex: string[] = [];

  constructor() {
    for(let i = 1; i <= 9; i++) {
      this.arrayPokemonIndex.push('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+i+'.png');
    }
  }

  ngOnInit(): void {
  }

}
