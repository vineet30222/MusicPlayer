import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { MusicComponent } from './music/music.component';

import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PlaylistComponent } from './playlist/playlist.component';


const appRoutes: Routes = [
    {
        path: '', redirectTo: 'player', pathMatch: 'full'
     },
     {
        path: 'signin', component: SigninComponent
     } ,
     {
        path: 'playlist', component: PlaylistComponent
     } ,
     {
        path: 'signup', component: SignupComponent
     },
      {
        path: 'player', component: PlayerComponent,
     },
     {
        path: 'artist/:id', component: ArtistComponent,
     },
     {
        path: 'album/:id', component: AlbumComponent,
     },
    {
        path: 'music', component: MusicComponent
    }
   
];
@NgModule(
    {
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]

    }
)
export class AppRouting {

}
