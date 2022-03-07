import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessComponent} from "./chess/chess.component";
import {CounterComponent} from "./counter/counter.component";
import {PokedexIndexComponent} from "./pokedex-index/pokedex-index.component";
import {PokedexComponent} from "./pokedex/pokedex.component";
import {FactionIndexComponent} from "./faction-index/faction-index.component";
import {FactionDetailComponent} from "./faction-detail/faction-detail.component";
import {AccountComponent} from "./account/account.component";
import {GameComponent} from "./game/game.component";
import {AccountDetailComponent} from "./account-detail/account-detail.component";
import {MainMultTableComponent} from "./main-mult-table/main-mult-table.component";
import {MainGamePageComponent} from "./main-game-page/main-game-page.component";
import {GameDetailComponent} from "./game-detail/game-detail.component";
import {ApiPokedexComponent} from "./api-pokedex/api-pokedex.component";
import {FormLanguageComponent} from "./form-language/form-language.component";

// path : le chemin à utiliser dans l'URL
// component : le component lié au chemin
const routes: Routes = [
  { path: 'chess', component: ChessComponent },
  { path: 'counter/:initialValue', component: CounterComponent },
  { path: 'pokedex', component: PokedexIndexComponent },
  { path: 'pokedex/:slugPokedex', component: PokedexComponent },
  { path: 'faction', component: FactionIndexComponent },
  { path: 'faction/:slugFaction', component: FactionDetailComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account/:idAccount', component: AccountDetailComponent },
  { path: 'game', component: GameComponent },
  { path: 'game/:idGame', component: GameDetailComponent },
  { path: 'api/pokedex', component: ApiPokedexComponent },
  { path: '', component: MainGamePageComponent },
  { path: 'form/language', component: FormLanguageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
