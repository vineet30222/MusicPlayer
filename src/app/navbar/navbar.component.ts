import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: SpotifyService, private router: Router) { }
// tslint:disable-next-line:member-ordering
loggedIn: boolean;
  ngOnInit() {
    this.loggedIn = this.service.isLoggedIn();
    console.log(this.loggedIn);
  }
onLogout() {
  this.service.Logout();
  this.router.navigateByUrl('/signin');
}
}
