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
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
