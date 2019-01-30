import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
 import { tap } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from 'src/Artist';
import { Album } from 'src/Album';
import { Playlist } from './playlist';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private clientId = '954bbed16a5044f289f08709e404c858';
private searchUrl: string;
    // tslint:disable-next-line:member-ordering
    isError = false;
// tslint:disable-next-line:member-ordering
searchRes: Artist[];
// tslint:disable-next-line:member-ordering
isAdded ;
// tslint:disable-next-line:member-ordering


// tslint:disable-next-line:member-ordering
artist: Artist[];

// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:variable-name
private access_token = 'BQDXR14tB79WmU9qn1y7aWEF7N4xR4OhKNxPVaGFqtfxJinUSCiG3a3fTDzQ6euLPrwb5tIbYDjg6sikcU5VFhQlrJgK0QEAzfwJaiogVUTpPQMaz6CYempc5gIguG97S_-4AGmHAGrNtZvxUNtnn5dhstypcQ&refresh_token=AQDQAqOiMYZAou3VdC_s2R7YNfEwkqPOcnSeMqWjIoetfU6ScUYVtmdrn9aRT-e6FhnORk7PzBxgX_ZQPgBG9zvK3XAVRM94u7gwnRhXeELFz6PMw1mFr6o1DdUDzddDLnh_Vg';
  // tslint:disable-next-line:member-ordering
  loggedIn: boolean;
  // tslint:disable-next-line:member-ordering
  userName: any;
  // tslint:disable-next-line:member-ordering
  email: string;
  constructor(private http: HttpClient) { }
  searchMusic(str: string, type= 'artists') {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
this.searchUrl = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientId + '&query=';
const url = this.searchUrl + str;
return this.http.get(url, {headers: headers}).subscribe(res => {
  const art = JSON.stringify(res);
  const artist = JSON.parse(art);
  this.searchRes = artist.artists.items;
 // console.log(this.searchRes);
});
  }
  getArtist(id: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
this.searchUrl = 'https://api.spotify.com/v1/artists/' + id;
const url = this.searchUrl;
return this.http.get<Artist[]>(url, {headers: headers}).pipe(
  tap(res => res)
);
  }
  getAlbums(artistId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
this.searchUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
const url = this.searchUrl;
return this.http.get<any>(url, {headers: headers}).pipe(
  tap(res => res)
);
  }
  getAlbum(id: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
this.searchUrl = 'https://api.spotify.com/v1/albums/' + id;
const url = this.searchUrl;
return this.http.get<any>(url, {headers: headers}).pipe(
  tap(res => res)
);
  }
  
  registerUser(user) {
    this.http.post('http://localhost:3000/signup', user).subscribe(res => {
      console.log(res);
    });
  }
  onLogin(user) {
      const headers = new HttpHeaders({'Content-type': 'application/json'});
      this.loggedIn = true;
      return this.http.post('http://localhost:3000/signin', user, {headers: headers});
    }
  
    Logout() {
      localStorage.clear();
    }
    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }
    addToPlaylist(playlist: Playlist) {
      const headers = new HttpHeaders({'Content-type': 'application/json'});
      console.log(playlist);
      this.http.post('http://localhost:3000/playlist/add', playlist, {headers: headers}).subscribe((res) => {
       
      
          
     if ((JSON.parse((JSON.stringify(res))).added) === true) {
        this.isAdded = true;
        this.isError = false;
        console.log(typeof(JSON.parse((JSON.stringify(res))).added) + ' ' + (this.isAdded));
     } else {
      this.isAdded = false;
      this.isError = true;
     }
       
      });
    }
    
    getPlaylist() {
      const email = {trackEmail: localStorage.getItem('email')};
      const headers = new HttpHeaders({'Content-type': 'application/json'});
      return this.http.post('http://localhost:3000/playlist/get', email, {headers: headers}).pipe(
        tap(res => res)
      );
  
    }
    close() {
      this.isAdded = false;
      this.isError = false;
    }
    deleteTrack(name: string) {
    const search = {trackEmail: localStorage.getItem('email'), trackName: name};
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    this.http.post('http://localhost:3000/playlist/delete', search, {headers: headers}).subscribe((res) => {
     console.log(res);
   });
    }
}
