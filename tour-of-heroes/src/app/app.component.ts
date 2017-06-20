import { Component } from '@angular/core';
import { Hero } from './hero-details/hero-details.component';

@Component({
  selector: 'mk-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
}
