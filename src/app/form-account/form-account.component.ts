import {Component, Input, OnInit} from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {Account} from "../../models/api-steam/account";
import {ApiRequestService} from "../../service/api-request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.scss']
})
export class FormAccountComponent implements OnInit {

  @Input()
  account: Account = new Account();

  faEye = faEye;
  maxNameCharacters: number = 4;
  maxNicknameCharacters: number = 3;
  tmpCheckPassword: string = '';
  typeInput: string = 'password';
  alertAccountOk: boolean = false;

  // import {Router} from "@angular/router";
  constructor(
    private apiRequestService: ApiRequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.account)
  }

  // async : mot clé indiquant que la fonction effectue un traitement "asynchrone"
  // Promise<void> : une fonction ayant un traitement asynchrone, renvoie toujours une Promise
  // Ici la fonction n'a pas de return, donc une Promise vide (Promise<void>)
  async submit(): Promise<void> {
    // On doit préciser async aussi devant notre fonction anonyme
    if (this.account.id !== 0) {
      this.apiRequestService.updateAccount(this.account).subscribe(async (data) => {
        if (data) {
          this.alertAccountOk = true;
          // on place le "await" devant le traitement asynchrone
          await this.router.navigate(['/account/' + this.account.id + '/details']);
        }
      });
    } else {
      this.apiRequestService.createAccount(this.account).subscribe(async (data) => {
        if (data) {
          this.alertAccountOk = true;
          // on place le "await" devant le traitement asynchrone
          await this.router.navigate(['/account']);
        }
      });
    }
  }

}
