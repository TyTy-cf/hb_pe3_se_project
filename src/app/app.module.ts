import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ChessComponent } from './chess/chess.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexIndexComponent } from './pokedex-index/pokedex-index.component';
import { FactionIndexComponent } from './faction-index/faction-index.component';
import { FactionDetailComponent } from './faction-detail/faction-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { AccountComponent } from './account/account.component';
import { GameComponent } from './game/game.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { MultTableComponent } from './mult-table/mult-table.component';
import { MainMultTableComponent } from './main-mult-table/main-mult-table.component';
import { CardGameComponent } from './card-game/card-game.component';
import { MainGamePageComponent } from './main-game-page/main-game-page.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { ApiPokedexComponent } from './api-pokedex/api-pokedex.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormLanguageComponent } from './form-language/form-language.component';
import { FactionStarshipComponent } from './faction-starship/faction-starship.component';
import { FormAccountComponent } from './form-account/form-account.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormGameComponent} from "./form-game/form-game.component";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ChessComponent,
    NavbarComponent,
    PokedexComponent,
    PokedexIndexComponent,
    FactionIndexComponent,
    FactionDetailComponent,
    AccountComponent,
    GameComponent,
    AccountDetailComponent,
    MultTableComponent,
    MainMultTableComponent,
    CardGameComponent,
    MainGamePageComponent,
    GameDetailComponent,
    ApiPokedexComponent,
    FormLanguageComponent,
    FactionStarshipComponent,
    FormAccountComponent,
    FormGameComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
