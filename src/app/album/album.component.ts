import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Params } from '@angular/router';
import { tap} from 'rxjs/operators';

import { Playlist } from '../playlist';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album;
  playlist: Playlist = new Playlist();
  error = false;
  isAdded = false;
  index;
  constructor(private spotify: SpotifyService, private route: ActivatedRoute) { }

 
  ngOnInit() {
    this.route.params.pipe(tap((params: Params) => params['id']
    )
    ).subscribe((id) => {
    console.log(id.id);
     this.spotify.getAlbum(id.id).subscribe(album => {
        this.album = album;
        console.log(this.album);
      });
     
    });
  
  }
  addingToPlaylist(index) {
    this.close();
    console.log(this.album.tracks.items[index].name);
    this.index = index ;
this.playlist.trackEmail = (localStorage.getItem('email'));
this.playlist.trackName = this.album.tracks.items[index].name;
this.playlist.trackPreview = this.album.tracks.items[index].preview_url;

this.playlist.trackSpotify = this.album.tracks.items[index].external_urls.spotify;
this.spotify.addToPlaylist(this.playlist);


// console.log(this.isAdded);

}
close() {
  this.spotify.close();
 
}
}
