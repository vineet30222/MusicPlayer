import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { MusicComponent } from './music/music.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRouting } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MusicComponent,
    NavbarComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    SigninComponent,
    SignupComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule, AppRouting, FormsModule, HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
