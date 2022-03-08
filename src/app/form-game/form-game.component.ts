import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Game} from "../../models/api-steam/game";

@Component({
  selector: 'app-form-game',
  templateUrl: './form-game.component.html',
  styleUrls: ['./form-game.component.scss']
})
export class FormGameComponent implements OnInit {

  formGame: FormGroup;
  game: Game = new Game();
  nameExists: boolean = false;

  constructor() {
    // FormControl : ça représente un input de l'html, mais en code
    // on indique son état initial et surtout à partir de quelle donnée
    // Et ses éventuelles validations
    this.formGame = new FormGroup(
      {
        _name: new FormControl(
          this.game.name, [
            Validators.required
          ]
        ),
        _thumbnailCover: new FormControl(
          this.game.thumbnailCover, [
            Validators.required
          ]
        )
      }
    );
  }

  ngOnInit(): void {
  }

  get name(): AbstractControl {
    return <AbstractControl>this.formGame.get('_name');
  }

  get thumbnailCover(): AbstractControl {
    return <AbstractControl>this.formGame.get('_thumbnailCover');
  }

  submit(): void {
    // get sur l'api pour tester l'existence de ce jeu
    // si oui, alors nameExists = true; et on ne modifie pas l'objet
    // this.nameExists = true;
    console.log(this.formGame);
    this.game.name = this.name.value;
    this.game.thumbnailCover = this.thumbnailCover.value;
    console.log(this.game);
  }
}
