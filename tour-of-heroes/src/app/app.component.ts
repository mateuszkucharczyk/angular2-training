import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'mk-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
}
