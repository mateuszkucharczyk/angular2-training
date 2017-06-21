import { Show } from './../search/spotify.models';
import { Component, OnInit, Input } from '@angular/core';

export type PosterSize = 'md' | 'lg';

@Component({
  selector: 'ma-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input() tvShow: Show;
  @Input() size: PosterSize;
  imgUrl: string;

  constructor() {

  }

  ngOnInit() {
    this.size === 'lg'
      ? this.imgUrl = this.tvShow.image.original
      : this.imgUrl = this.tvShow.image.medium;

    // if (this.size === 'lg') {
    //   this.imgUrl = this.tvShow.image.original;
    // } else {
    //   this.imgUrl = this.tvShow.image.medium;
    // }
  }

}
