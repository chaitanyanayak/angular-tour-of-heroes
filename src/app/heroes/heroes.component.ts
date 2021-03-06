import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(public heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}