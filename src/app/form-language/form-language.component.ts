import { Component } from '@angular/core';
import {Language} from "../../models/api-steam/language";

@Component({
  selector: 'app-form-language',
  templateUrl: './form-language.component.html',
  styleUrls: ['./form-language.component.scss']
})
export class FormLanguageComponent {

  language: Language = new Language();

  constructor() {
    // Traitement du ngModel :

    // const input: HTMLInputElement|null = document.querySelector('input[name="totoFaitDuVelo"]');
    // if (input) {
    //   input.value = this.language.name;
    //   input.addEventListener('change', (e) => {
    //     this.language.name = input.value;
    //   });
    // }
  }

  maSuperMethodeDeSoumissionDeFormulaire(): void {
    console.log(this.language);
  }
}
