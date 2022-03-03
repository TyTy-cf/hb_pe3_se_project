import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPlatformRequest} from "../models/api-steam/api-platform-request";
import {Account} from "../models/api-steam/account";
import {Game} from "../models/api-steam/game";
import {sprintf} from "sprintf-js";
import {Librarie} from "../models/api-steam/librarie";

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private rawUrl: string = 'https://steam-ish.test-02.drosalys.net';

  // Accounts
  private urlAccounts: string = '/api/accounts';
  private urlAccountById: string = '/api/accounts/';

  // Games
  private urlGames: string = '/api/games';
  private urlGamesById: string = this.rawUrl + '/api/games/%s';
  private urlFiltered: string = this.rawUrl + this.urlGames + '?page=1&order%5B';

  // Librairie
  private urlLibrariesByAccountId: string = this.rawUrl + '/api/libraries?page=1&account=%s';

  constructor(private httpClient: HttpClient) { }

  /**
   * Permet de faire une requête http get vers l'api Steam-Ish afin de récupérer tous les Account
   *
   * @param urlPagination l'url à prendre en argument, par défaut elle vaut /api/accounts
   *
   * @return Observable<ApiPlatformRequest<Account>> où les accounts seront stockés
   */
  getAccounts(urlPagination: string = this.urlAccounts): Observable<ApiPlatformRequest<Account>> {
    console.log(this.rawUrl + urlPagination);
    return this.httpClient.get<ApiPlatformRequest<Account>>(this.rawUrl + urlPagination);
  }

  getAccountById(id: string): Observable<Account> {
    return this.httpClient.get<Account>(this.rawUrl + this.urlAccountById + id);
  }

  /**
   * Permet de faire une requête http get vers l'api Steam-Ish afin de récupérer tous les jeux
   *
   * @param urlPagination l'url à prendre en argument, par défaut elle vaut /api/games
   *
   * @return un Observable<ApiPlatformRequest<Game>> où les jeux seront stockés
   */
  getGames(urlPagination: string = this.urlGames): Observable<ApiPlatformRequest<Game>> {
    return this.httpClient.get<ApiPlatformRequest<Game>>(this.rawUrl + urlPagination);
  }

  /**
   * Effectue une requête http get afin de récupérer un objet Game à partir de son ID
   *
   * @param id l'id du jeu à récupérer via l'API
   *
   * @return Observable<Game> l'observable du jeu dont l'id vaut l'id en argument
   */
  getGameById(id: string): Observable<Game> {
    return this.httpClient.get<Game>(sprintf(this.urlGamesById, id));
  }

  /**
   * Effectue une requête http get afin de récupérer un objet Game à partir de son ID
   *
   * @param urlId l'url incluant l'id du jeu à récupérer via l'API
   *
   * @return Observable<Game> l'observable du jeu dont l'id vaut l'id en argument
   */
  getGameByUrlId(urlId: string): Observable<Game> {
    return this.httpClient.get<Game>(this.rawUrl + urlId);
  }

  getGamesByFilters(filteredField: string, orderBy: string = 'asc'): Observable<ApiPlatformRequest<Game>> {
    console.log(this.urlFiltered + filteredField + '%5D=' + orderBy);
    return this.httpClient.get<ApiPlatformRequest<Game>>(this.urlFiltered + filteredField + '%5D=' + orderBy);
  }

  getLibrariesByAccountId(id: string): Observable<ApiPlatformRequest<Librarie>> {
    // https://steam-ish.test-02.drosalys.net/api/libraries?page=1&account=5
    // urlLibrariesByAccountId =
    // https://steam-ish.test-02.drosalys.net/api/libraries?page=1&account=%s
    // le %s est remplacé par le paramètre de la fonction sprintf
    return this.httpClient.get<ApiPlatformRequest<Librarie>>(sprintf(this.urlLibrariesByAccountId, id));
  }


}
