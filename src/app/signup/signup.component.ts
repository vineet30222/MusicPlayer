import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private apiService: SpotifyService) { }

  ngOnInit() {
  }
  onSubmit(user) {
    this.apiService.registerUser(user);
  // console.log(user);
  }
}
