import {HttpHeaders} from "@angular/common/http";

export class ApiConstantes {

  // un attribut static est un attribut commun à toutes
  // les instances de la classe, et peut être accessible sans que
  // la classe soit instanciée
  static  headers: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/ld+json',
    })
  };

  static headersPatch: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/merge-patch+json',
    })
  };

  static rawUrl: string = 'https://steam-ish.test-02.drosalys.net';
}
