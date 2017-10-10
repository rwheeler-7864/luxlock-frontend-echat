// Library Modules
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthGuardService } from '../../services/auth-guard.service';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-ll-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;
  storeName: string;

  constructor(
    private authGuardService: AuthGuardService,
    private router: Router,
    private userAuthService: UserAuthService
  ) {
    this.storeName = 'Maggy London';
  }

  ngOnInit() {
  }

  logIn() {
    this.userAuthService.logIn(this.email, this.password)
      .then(
        user => {
          // this.user = new User().deserialize(user);
          // if (this.user && this.user.isActive) {
          // }
          this.authGuardService.setLocalUser(user);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      )
  }
}
