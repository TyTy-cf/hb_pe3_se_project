import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FactionService} from "../../service/faction.service";
import {Faction} from "../../models/star_wars/faction";
import {Starship} from "../../models/star_wars/starship";
import {StarshipService} from "../../service/starship.service";

@Component({
  selector: 'app-faction-detail',
  templateUrl: './faction-detail.component.html',
  styleUrls: ['./faction-detail.component.scss']
})
export class FactionDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  body: HTMLBodyElement|null = document.querySelector('body');
  faction: Faction|undefined;
  arrayStarships: Starship[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private factionService: FactionService,
    private starshipService: StarshipService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams) => {
      this.faction = this.factionService.getFactionBySlug(routeParams.slugFaction);
      if (this.faction) {
        this.arrayStarships = this.starshipService.getStarshipsByFaction(this.faction);
      }
    });
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
