import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-faction-starship',
  templateUrl: './faction-starship.component.html',
  styleUrls: ['./faction-starship.component.scss']
})
export class FactionStarshipComponent implements OnInit {

constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramsRoute) => {
      console.log(paramsRoute.slugFaction)
      console.log(paramsRoute.slugStarship)
    })
  }

}
