import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CredentialsBean } from '../credentialsbean';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credBean: CredentialsBean = new CredentialsBean();
  credentialsBean: CredentialsBean = new CredentialsBean();
  constructor(private router: Router, private userService: MovieServiceService) { }

  ngOnInit() {
  }

  login(): void {
    alert(this.credentialsBean.userID);
    this.userService.UserLogin(this.credentialsBean)
    .subscribe(data => {
      this.credBean = data;

      if (this.credBean.userID === this.credentialsBean.userID) {
        this.router.navigate(['/signup']);
     } else {
        alert('use correct userid and password');
       }
      });
      }
}

