import { Component, OnInit } from '@angular/core';
import {Game} from "../../models/api-steam/game";
import {ActivatedRoute} from "@angular/router";
import {ApiRequestService} from "../../service/api-request.service";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game: Game|undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiRequestService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramRoute) => {
      const gameId: string = paramRoute.idGame;
      if (gameId) {
        this.apiService.getGameById(gameId).subscribe((game) => {
          this.game = game;
        });
      }
    });
  }

}
