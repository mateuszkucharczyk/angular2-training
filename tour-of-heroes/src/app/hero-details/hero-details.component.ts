import { Component, OnInit, Input } from '@angular/core';


export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'mk-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
