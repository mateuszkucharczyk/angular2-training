import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Show, ShowData } from './search/spotify.models';

// RxJS stream does not have all operators imported at once because there is too many of them.
// Pick ones you need
// import 'rxjs/add/operator/map'

@Injectable()
export class TvmazaService {

  constructor(private http: Http) { }

  findShows(query: string): Observable<Show[]> {
    // notice url is enclosed with ` not '
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`; // 'https://api.spotify.com/v1/search?type=album&q=batman';

    // subscribe() first - get() does not send GET request until anything is subscribed to handle response
    // handle response via callback function
    // this.http.get(apiUrl)
    //   .subscribe((resp) => this.shows = (resp.json() as ShowData[]).map(data => data.show));
    // alternative syntax: map({show} => show)

    // This is how we should do it.
    // Handle response by RxJS stream instead callbacks
    return this.http
      .get(apiUrl).map((resp) => (resp.json() as ShowData[])
        .map(data => data.show));
  }
}
