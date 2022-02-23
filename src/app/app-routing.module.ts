import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessComponent} from "./chess/chess.component";
import {CounterComponent} from "./counter/counter.component";
import {PokedexComponent} from "./pokedex/pokedex.component";

// path : le chemin à utiliser dans l'URL
// component : le component lié au chemin
const routes: Routes = [
  { path: 'chess', component: ChessComponent },
  { path: 'counter/:initialValue', component: CounterComponent },
  { path: 'pokedex', component: PokedexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
