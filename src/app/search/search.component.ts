import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from 'src/Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
str: string;
  constructor(private spotify: SpotifyService) { }
// tslint:disable-next-line:member-ordering
searchRes: Artist[];
  ngOnInit() {
    this.searchRes = this.spotify.searchRes;
    console.log(this.searchRes);
  }
searchMusic() {
  if (this.str) {
  this.spotify.searchMusic(this.str);
  }
}
}
