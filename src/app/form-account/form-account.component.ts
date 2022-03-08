import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {Account} from "../../models/api-steam/account";
import {ApiRequestService} from "../../service/api-request.service";

@Component({
  selector: 'app-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.scss']
})
export class FormAccountComponent implements OnInit {

  faEye = faEye;
  account: Account = new Account();
  maxNameCharacters: number = 4;
  maxNicknameCharacters: number = 3;
  tmpCheckPassword: string = '';
  typeInput: string = 'password';

  constructor(private apiRequestService: ApiRequestService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.apiRequestService.createAccount(this.account).subscribe();

  }

}
