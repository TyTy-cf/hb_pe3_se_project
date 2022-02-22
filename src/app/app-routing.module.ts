import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessComponent} from "./chess/chess.component";
import {CounterComponent} from "./counter/counter.component";

// path : le chemin à utiliser dans l'URL
// component : le component lié au chemin
const routes: Routes = [
  { path: 'chess', component: ChessComponent },
  { path: 'counter', component: CounterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
