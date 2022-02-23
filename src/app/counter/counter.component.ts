import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokedexService} from "../../service/pokedex.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  // Pensez bien à ce que vos attributs/méthodes soient PUBLIQUE
  // afin de les afficher dans le .html
  increment: number = 0;

  // Via Injection de dépendance on récupère un objet de type ActivatedRoute
  // (Injection de dépendance : création de l'objet géré par Angular
  constructor(private attributeRoute: ActivatedRoute, private pokedexService: PokedexService) { }

  ngOnInit(): void {
    // fonction fléchée ou fonction anonyme
    this.attributeRoute.params.subscribe(paramRoute => {
      // Via le paramRoute, on souhaite récupérer le nom du paramètre que l'on a définit
      // dans le app.routing-module.ts
      this.increment = parseInt(paramRoute.initialValue);
    });
    console.log(this.pokedexService.pokedex);
  }

  addIncrement(value: number): void {
    this.increment += value;
  }
}
