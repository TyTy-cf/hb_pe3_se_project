import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from "../../service/api-request.service";
import {ApiPlatformRequest} from "../../models/api-steam/api-platform-request";
import {Account} from "../../models/api-steam/account";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accountPlatformRequest: ApiPlatformRequest<Account>|undefined;

  constructor(private apiRequestService: ApiRequestService) { }

  ngOnInit(): void {
    this.apiRequestService.getAccounts().subscribe((jsonResponse) => {
      this.accountPlatformRequest = jsonResponse;
    });
  }

  changePage(url: string): void {
    this.apiRequestService.getAccounts(url).subscribe((jsonResponse) => {
      this.accountPlatformRequest = jsonResponse;
    });
  }
}
