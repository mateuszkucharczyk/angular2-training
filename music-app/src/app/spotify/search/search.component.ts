import { Show, ShowData } from './spotify.models';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


// RxJS stream does not have all operators imported at once because there is too many of them.
// Pick ones you need
import 'rxjs/add/operator/map'

// ng g c spotify/search
@Component({
  selector: 'ma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];
  query = 'batman';

  constructor(private http: Http) {
    this.search(this.query);
  }

  search(query: string) {
    // notice url is enclosed with ` not '
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`; // 'https://api.spotify.com/v1/search?type=album&q=batman';

    // subscribe() first - get() does not send GET request until anything is subscribed to handle response
    // handle response via callback function
    // this.http.get(apiUrl)
    //   .subscribe((resp) => this.shows = (resp.json() as ShowData[]).map(data => data.show));
    // alternative syntax: map({show} => show)

    // This is how we should do it.
    // Handle response by RxJS stream instead callbacks
    this.http
      .get(apiUrl).map((resp) => (resp.json() as ShowData[])
        .map(data => data.show))
      .subscribe((shows) => this.shows = shows);
  }

  ngOnInit() {
  }

}
