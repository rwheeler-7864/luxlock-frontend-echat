// Library Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './register/register.component';


const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'register',
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})

export class AuthRoutingModule { }
