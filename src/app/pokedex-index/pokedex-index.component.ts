import { Component } from '@angular/core';
import {PokedexService} from "../../service/pokedex.service";

@Component({
  selector: 'app-pokedex-index',
  templateUrl: './pokedex-index.component.html',
  styleUrls: ['./pokedex-index.component.scss']
})
export class PokedexIndexComponent {

  // injection de dépendance => on laisse Angular créer le Service pour nous
  // une ID se fait dans le constructeur, on peut injecter :
  // - Les Services
  // - Certains objets propre à Angular
  // (Ce n'est pas parce que l'on a le mot clé public que c'est une ID)
  // (public est là pour simplifier l'écriture de l'attribut)
  constructor(public pokedexService: PokedexService) { }

}
