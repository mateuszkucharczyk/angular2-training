import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// ng g c spotify/search
@Component({
  selector: 'ma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(http: Http) {
    const apiUrl = 'https//api.spotify.com/v1/search?type=album&q=batman';
  }

  ngOnInit() {
  }

}
