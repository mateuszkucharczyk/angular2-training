import { HeroService } from './../hero.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'mk-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.scss'],
  providers: [HeroService]
})
export class HerosListComponent implements OnInit {
  heroes: Hero[];
  @Output() heroSelected = new EventEmitter<Hero>()

  constructor(private heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  ngOnInit() {
  }
}
