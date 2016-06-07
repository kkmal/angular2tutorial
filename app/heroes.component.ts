import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero' ;
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    styleUrls: ['./app/app.css'],
    directives: [ HeroDetailComponent ],
    template:`
        <h2>My Heroes</h2>
        <ul class="heroes">
          <li *ngFor="let hero of heroes"
           [class.selected]="hero === selectedHero"
           (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>

  `


})



export class HeroesComponent implements OnInit {
  ngOnInit() {
    this.getHeroes() ;
  }
  title = 'Tour of Heroes' ;
  heroes : Hero[];
  selectedHero: Hero ;

  onSelect ( hero: Hero) { this.selectedHero = hero; }

  constructor (private heroService : HeroService ) {      }

  getHeroes () {
     this.heroService.getHeroes().then( heroes => this.heroes = heroes );
  }
}
