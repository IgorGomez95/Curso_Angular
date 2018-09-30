import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {

  results: any[] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroesService) {
     }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.termino = params[ 'termino' ];
      this.results = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.results);
    });
  }

}
