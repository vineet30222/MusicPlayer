import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private apiService: SpotifyService, private router: Router) { }
// tslint:disable-next-line:member-ordering
loggedIn = false;
  ngOnInit() {
  //  if (this.apiService.isLoggedIn()) {
  //    this.router.navigate(['/user']);
  //  }
  }
  onSubmit(user) {
  this.apiService.onLogin(user).subscribe(
    res => {
    
     const data1 = JSON.stringify(res);
      const data = JSON.parse(data1);
      console.log(data.email);
      this.apiService.userName = data.userName;
      this.apiService.email = JSON.stringify(data.email);
      console.log(this.apiService.email);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('email', data.email);
      this.router.navigateByUrl('/player');
      this.loggedIn = true;
      console.log('logged In');
        },
        error => console.error(error)
  );
 
   
  }
}
