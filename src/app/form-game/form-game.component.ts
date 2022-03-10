import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Game} from "../../models/api-steam/game";
import {ApiRequestService} from "../../service/api-request.service";
import {Language} from "../../models/api-steam/language";
import {Genre} from "../../models/api-steam/genre";

@Component({
  selector: 'app-form-game',
  templateUrl: './form-game.component.html',
  styleUrls: ['./form-game.component.scss']
})
export class FormGameComponent implements OnInit {

  formGame: FormGroup;
  game: Game = new Game();
  nameExists: boolean = false;
  languages: Language[] = [];
  arrayGenres: Genre[] = [];

  constructor(private apiService: ApiRequestService) {
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
        ),
        _language: new FormControl(
          this.game.language
        ),
        _genres: new FormArray([
          new FormControl(this.game.genres),
        ]),
      }
    );
  }

  ngOnInit(): void {
    this.apiService.getLanguages().subscribe((jsonLanguages) => {
      this.languages = jsonLanguages["hydra:member"];
    });
    this.apiService.getGenres().subscribe((jsonGenres) => {
      this.arrayGenres = jsonGenres["hydra:member"];
      console.log(this.arrayGenres)
    });
  }

  get name(): AbstractControl {
    return <AbstractControl>this.formGame.get('_name');
  }

  get thumbnailCover(): AbstractControl {
    return <AbstractControl>this.formGame.get('_thumbnailCover');
  }

  get language(): AbstractControl {
    return <AbstractControl>this.formGame.get('_language');
  }

  get genres(): FormArray {
    return <FormArray>this.formGame.get('_genres');
  }

  addNameField(): void {
    this.genres.push(new FormControl(this.game.genres));
  }

  deleteNameField(index: number): void {
    if (this.genres.length !== 1) {
      this.genres.removeAt(index);
    }
  }

  submit(): void {
    // get sur l'api pour tester l'existence de ce jeu
    // si oui, alors nameExists = true; et on ne modifie pas l'objet
    // this.nameExists = true;
    console.log(this.formGame);
    this.game.name = this.name.value;
    this.game.thumbnailCover = this.thumbnailCover.value;
    this.game.language = this.language.value;
    this.game.genres = this.genres.value;
    console.log(this.game);
  }
}
