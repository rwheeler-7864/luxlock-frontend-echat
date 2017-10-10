// Library Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ChatComponent } from './chat/chat.component';

// Services
import { AuthGuardService } from '../services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    canActivate: [AuthGuardService, ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})

export class ChatRoutingModule { }
