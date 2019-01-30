import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
playlist: Playlist[] = [];
list: Playlist;
  constructor(private service: SpotifyService) { }

  ngOnInit() {
    this.service.getPlaylist().subscribe((res) => {
      const list1 = JSON.stringify(res);
      const list = JSON.parse(list1);
      // console.log(list.result);
    
    let l = 0;
      for ( l = 0; l < list.result.length; l++) {
      this.list = new Playlist();
     // console.log(list.result[l].trackName);
      this.list.trackEmail = list.result[l].trackEmail;
      this.list.trackName = list.result[l].trackName;
      this.list.trackPreview = list.result[l].trackPreview;
      this.list.trackSpotify = list.result[l].trackSpotify;
     // console.log(this.list);
      this.playlist.push(this.list);
      }
     
    // console.log(this.playlist[0].trackEmail);
    }); 
  
  }
  
  onRemove(name: string) {
   
    this.service.deleteTrack(name);
    let i = 0;
    let index = 0;
   for (i = 0; i < this.playlist.length; i++) {
           if (this.playlist[i].trackName === name) {
           index = i;
           }
    }
    // const item = this.playlist.find( i => i.trackName === name);
     this.playlist.splice(index, 1);
   
   
  
  }

}
