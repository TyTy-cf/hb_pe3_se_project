import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  body: HTMLBodyElement|null = document.querySelector('body');

  changeBackgroundColor() {
    // Passage en mode light/dark
    // On vérifie si body est en noir, alors on la supprime
    // Sinon on l'ajoute
    if (this.body) {
      if (this.body.classList.contains('global-black')) {
        this.body.classList.remove('global-black');
      } else {
        this.body.classList.add('global-black');
      }
    }
  }
}
