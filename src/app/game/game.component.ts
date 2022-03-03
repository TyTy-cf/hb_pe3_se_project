import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from "../../service/api-request.service";
import {ApiPlatformRequest} from "../../models/api-steam/api-platform-request";
import {Game} from "../../models/api-steam/game";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameApiPlatformRequest: ApiPlatformRequest<Game>|undefined;
  displayedGames: Game[] = [];

  constructor(private apiRequestService: ApiRequestService) { }

  ngOnInit(): void {
    this.apiRequestService.getGames().subscribe((jsonResponse) => {
      this.gameApiPlatformRequest = jsonResponse;
      this.displayedGames = this.gameApiPlatformRequest["hydra:member"];
    });
  }

  changePage(url: string): void {
    this.apiRequestService.getGames(url).subscribe((jsonResponse) => {
      this.gameApiPlatformRequest = jsonResponse;
    });
  }

  // via un (changes) sur un input on call cette fonction
  searchGames(gameName: string): void {
    if (this.gameApiPlatformRequest) {
      this.displayedGames = this.gameApiPlatformRequest["hydra:member"].filter((game) => game.name.includes(gameName));
    }
  }

}
