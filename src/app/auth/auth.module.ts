// Library Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './register/register.component';

// Modules
import { AuthRoutingModule } from './auth-routing.module';

// Services
import {UserAuthService} from './user-auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    AuthRoutingModule
  ],
  declarations: [
    LogInComponent,
    SignUpComponent
  ],
  providers: [
    UserAuthService,
  ],
  exports: [
    LogInComponent,
    SignUpComponent
  ]
})

export class AuthModule { }
