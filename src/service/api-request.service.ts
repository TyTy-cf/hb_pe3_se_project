import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPlatformRequest} from "../models/api-steam/api-platform-request";
import {Account} from "../models/api-steam/account";
import {Game} from "../models/api-steam/game";
import {sprintf} from "sprintf-js";

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private rawUrl: string = 'https://steam-ish.test-02.drosalys.net';

  private urlAccounts: string = '/api/accounts';
  private urlAccountById: string = '/api/accounts/';

  private urlGames: string = '/api/games';
  private urlFiltered: string = this.rawUrl + this.urlGames + '?page=1&order%5B';

  constructor(private httpClient: HttpClient) { }

  getAccounts(urlPagination: string = this.urlAccounts): Observable<ApiPlatformRequest<Account>> {
    console.log(this.rawUrl + urlPagination);
    return this.httpClient.get<ApiPlatformRequest<Account>>(this.rawUrl + urlPagination);
  }

  getAccountById(id: string): Observable<Account> {
    return this.httpClient.get<Account>(this.rawUrl + this.urlAccountById + id);
  }

  getGames(urlPagination: string = this.urlGames): Observable<ApiPlatformRequest<Game>> {
    return this.httpClient.get<ApiPlatformRequest<Game>>(this.rawUrl + urlPagination);
  }

  getGamesByFilters(filteredField: string, orderBy: string = 'asc'): Observable<ApiPlatformRequest<Game>> {
    console.log(this.urlFiltered + filteredField + '%5D=' + orderBy);
    return this.httpClient.get<ApiPlatformRequest<Game>>(this.urlFiltered + filteredField + '%5D=' + orderBy);
  }

}
