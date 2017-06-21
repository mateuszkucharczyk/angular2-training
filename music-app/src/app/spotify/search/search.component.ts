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
  constructor(http: Http) {
    const apiUrl = 'https://api.tvmaze.com/search/shows?q=flash'; // 'https://api.spotify.com/v1/search?type=album&q=batman';

    // subscribe starts RxJS stream
    http.get(apiUrl)
      .subscribe((resp) => this.shows = (resp.json() as ShowData[]).map(data => data.show));

    // alternative
    // .subscribe((resp) => this.shows = (resp.json() as ShowData[]).map({show} => show));
  }

  ngOnInit() {
  }

}
