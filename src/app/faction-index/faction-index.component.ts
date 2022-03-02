import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import {FactionService} from "../../service/faction.service";
import {Faction} from "../../models/star_wars/faction";

@Component({
  selector: 'app-faction-index',
  templateUrl: './faction-index.component.html',
  styleUrls: ['./faction-index.component.scss']
})
export class FactionIndexComponent implements AfterViewInit, OnDestroy {

  body: HTMLBodyElement|null = document.querySelector('body');
  selectedFaction: Faction|undefined;

  constructor(public factionService: FactionService) { }

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
