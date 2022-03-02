import {AfterViewInit, Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {Faction} from "../../models/star_wars/faction";
import {Starship} from "../../models/star_wars/starship";
import {StarshipService} from "../../service/starship.service";

@Component({
  selector: 'app-faction-detail',
  templateUrl: './faction-detail.component.html',
  styleUrls: ['./faction-detail.component.scss']
})
export class FactionDetailComponent implements OnChanges, AfterViewInit, OnDestroy {

  @Input()
  faction: Faction|undefined;

  body: HTMLBodyElement|null = document.querySelector('body');
  arrayStarships: Starship[] = [];

  constructor(
    private starshipService: StarshipService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('previousValue');
    console.log(changes.faction.previousValue);
    console.log('currentValue');
    console.log(changes.faction.currentValue);
    // faction ici c'est le nom de l'attribut dont on veut "détecter" les changements
    if (changes.faction.previousValue !== changes.faction.currentValue) {
      if (this.faction) {
        this.arrayStarships = this.starshipService.getStarshipsByFaction(this.faction);
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.body) {
      this.body.classList.add('galaxy');
    }
  }

  ngOnDestroy(): void {
    if (this.body) {
      this.body.classList.remove('galaxy');
    }
  }

}
