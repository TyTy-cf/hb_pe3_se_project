import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from "../../service/api-request.service";
import {Game} from "../../models/api-steam/game";

@Component({
  selector: 'app-main-game-page',
  templateUrl: './main-game-page.component.html',
  styleUrls: ['./main-game-page.component.scss']
})
export class MainGamePageComponent implements OnInit {

  games: Game[] = [];
  gamesByPublishedAt: Game[] = [];

  constructor(private apiService: ApiRequestService) { }

  ngOnInit(): void {
    this.apiService.getGames().subscribe((jsonResponse) => {
      this.games = jsonResponse["hydra:member"];
    });
    this.apiService.getGamesByFilters('publishedAt', 'desc').subscribe((jsonResponse) => {
      this.gamesByPublishedAt = jsonResponse["hydra:member"];
    });
  }

}
