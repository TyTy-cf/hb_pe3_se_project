import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPlatformRequest} from "../models/api-steam/api-platform-request";
import {Account} from "../models/api-steam/account";

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private rawUrl: string = 'https://steam-ish.test-02.drosalys.net';
  private urlAccounts: string = '/api/accounts';
  private urlGames: string = '/api/games';

  constructor(private httpClient: HttpClient) { }

  getAccounts(urlPagination: string = this.urlAccounts): Observable<ApiPlatformRequest<Account>> {
    return this.httpClient.get<ApiPlatformRequest<Account>>(this.rawUrl + urlPagination);
  }

}
