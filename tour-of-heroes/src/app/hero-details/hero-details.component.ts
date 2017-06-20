import { Component, OnInit } from '@angular/core';


class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'mk-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstrom'
  };

  constructor() { }

  ngOnInit() {
  }

}
