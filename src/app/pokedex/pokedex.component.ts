import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../../service/pokedex.service";
import {ActivatedRoute} from "@angular/router";
import {Pokedex} from "../../assets/pokemon/pokedex";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  arrayPokemonImage: string[] = [];
  displayedByPage: number = 9; // nb pokemons by page
  startingIndex: number = 0;
  endingIndex: number = this.displayedByPage;
  currentPage: number = 1;
  slug: string = '';
  currentPokedex: Pokedex|undefined;

  constructor(
    private pokedexService: PokedexService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      // slugPokedex = celui déclaré l'app-routing.module.ts
      this.slug = param.slugPokedex;
      if (this.slug) {
        // On récupère un Pokédex en fonction du slug (car chaque slug est unique)
        this.currentPokedex = this.pokedexService.getPokedexBySlug(this.slug);
        // "if" sur un objet : on vérifie qu'il n'est pas undefined
        if (this.currentPokedex) {
          // le tableau d'image des Pokémons du component
          // va prendre la valeur de celui de mon objet Pokédex récupéré
          this.arrayPokemonImage = this.currentPokedex.arrayPokemonImage;
        }
      }
    });
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
    return Math.ceil(this.arrayPokemonImage.length/this.displayedByPage);
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
