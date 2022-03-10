import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiRequestService} from "../../service/api-request.service";
import {Account} from "../../models/api-steam/account";
import {Librarie} from "../../models/api-steam/librarie";

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {

  idAccount: string = '';
  account: Account|undefined;
  libraries: Librarie[] = [];
  formIsNotVisible: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiRequestService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramRoute) => {
      this.idAccount = paramRoute['idAccount'];
      console.log(paramRoute['idAccount']);
    });
    // getAccountById : renvoie un Observable<Account>
    // Concrètement vous pouvez l'assimiler à un compte twitter, sauf que pour récupérer le "tweet"
    // Vous devez IMPERATIVEMENT vous abonner
    // Du coup, on appelle la fonction subscribe afin de s'abonner à ce "compte twitter"
    // Pour qu'il nous donne son "fil d'actu" => ici c'est un objet Account
    // jsonResponse => argument de fonction, ici c'est une fonction anonyme/fléchée
    if (this.idAccount) {
      // get l'account
      this.apiService.getAccountById(this.idAccount).subscribe((argumentRetourObservable) => {
        this.account = argumentRetourObservable;
      });

      // get la librarie
      this.apiService.getLibrariesByAccountId(this.idAccount).subscribe((librariesJson) => {
        for (let librarie of librariesJson["hydra:member"]) {
          this.apiService.getGameByUrlId(librarie.game).subscribe((game) => {
            librarie.objectGame = game;
            this.libraries.push(librarie);
          });
        }
      });
    }
  }

}
