import { Show } from './../search/spotify.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input() tvShow: Show;
  constructor() { }

  ngOnInit() {
  }

}
