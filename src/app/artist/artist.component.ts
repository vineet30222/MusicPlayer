import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from 'src/Artist';
import { Album } from 'src/Album';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, tap, map } from 'rxjs/operators';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
id: string;
artist: Artist[];
albums: Album[];
  constructor(private spotify: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.pipe(tap((params: Params) => params['id']
    )
    ).subscribe((id) => {
      if (id.id.length > 0) {
     this.spotify.getArtist(id.id).subscribe(artist => {
        this.artist = artist;
      });
      }
      if (id.id.length > 0) {
      this.spotify.getAlbums(id.id).subscribe(albums => {
          this.albums = albums.items;
        });
      }
    });
  
  }

}
