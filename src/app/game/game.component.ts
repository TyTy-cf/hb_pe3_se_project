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

  constructor(private apiRequestService: ApiRequestService) { }

  ngOnInit(): void {
    this.apiRequestService.getGames().subscribe((jsonResponse) => {
      this.gameApiPlatformRequest = jsonResponse;
    });
  }

}
