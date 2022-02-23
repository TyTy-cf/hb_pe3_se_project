import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../../service/pokedex.service";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  arrayPokemonIndex: string[] = [];
  displayedByPage: number = 9; // nb pokemons by page
  startingIndex: number = 0;
  endingIndex: number = this.displayedByPage;
  currentPage: number = 1;

  constructor(private pokedexService: PokedexService) {
    console.log('dans le constructor');
    console.log(this.pokedexService.pokedex);
  }

  ngOnInit(): void {
    for(let i = 1; i <= 151; i++) {
      this.arrayPokemonIndex.push('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+i+'.png');
    }
    console.log('dans le onInit');
  }

  changePage(nb: number = 1) {
    this.currentPage += nb;
    // On essaie d'aller à la page suivante : on change les valeurs de startIndex et endIndex
    // En leur ajoutant la valeur du nombre de données à afficher par page
    // Ou en leur enlevant la valeur du nombre de données à afficher par page
    if (nb > 0) {
      this.startingIndex += this.displayedByPage;
      this.endingIndex += this.displayedByPage;
    } else {
      this.startingIndex -= this.displayedByPage;
      this.endingIndex -= this.displayedByPage;
    }
  }

  getTotalPage(): number {
    return Math.ceil(this.arrayPokemonIndex.length/this.displayedByPage);
  }

  changeDisplayed(newDisplayedByPage: number): void {
    // On récupère l'ancienne valeur de page max
    const oldCurrentMaxPage: number = this.getTotalPage();
    // On affecte la nouvelle valeur d'affichage par page
    this.displayedByPage = newDisplayedByPage;
    // On récupère la nouvelle page max
    const newMaxPage: number = this.getTotalPage();
    // Si l'ancienne est plus grande que la nouvelle, alors la page actuelle devient la nouvelle
    if (oldCurrentMaxPage > newMaxPage) {
      this.currentPage = newMaxPage;
    }
    // On met à jour nos index de slice
    this.endingIndex = newDisplayedByPage * this.currentPage;
    this.startingIndex = this.endingIndex - newDisplayedByPage;
  }
}
