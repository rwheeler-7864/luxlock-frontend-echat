// Library Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components
import { ChatComponent } from './chat/chat.component';

// Modules
import { ChatRoutingModule } from './chat-routing.module';

// Services
import { ChatService } from './chat.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ChatRoutingModule
  ],
  declarations: [
    ChatComponent
  ],
  providers: [
    ChatService,
  ],
  exports: []
})

export class ChatModule { }
