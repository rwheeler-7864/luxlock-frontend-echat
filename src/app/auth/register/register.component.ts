// Library Modules
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-ll-register',
  templateUrl: './register.component.html',
})
export class SignUpComponent {
  storeName: string;
  name: string;
  email: string;
  password: string;

  constructor(
    private router: Router,
    private userAuthService: UserAuthService
  ) {
    this.storeName = 'Maggy London';
  }

  register(): void {
    this.userAuthService.register(this.name, this.email, this.password)
      .then(
        user => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      )
  }
}
