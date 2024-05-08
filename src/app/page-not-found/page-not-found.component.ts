import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="center">
      <img src="../assets/Logos/crash.jpg" />
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/cars" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `,
})
export class PageNotFoundComponent {}
