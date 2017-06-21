import { BookmarksService } from './../../bookmarks/bookmarks.service';
import { TvmazaService } from './../tvmaza.service';
import { Show, ShowData } from './spotify.models';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

// ng g c spotify/search
@Component({
  selector: 'ma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];
  query = 'batman';

  constructor(private tv: TvmazaService, private bs: BookmarksService) {
    this.search(this.query);
  }

  search(query: string) {
    this.tv.findShows(query)
      .subscribe((shows) => this.shows = shows);
  }

  get bookmarks(): Show[] {
    return this.bs.getAll() as Show[];
  }

  ngOnInit() {
  }

}
