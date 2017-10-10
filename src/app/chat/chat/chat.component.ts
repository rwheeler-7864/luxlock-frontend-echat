// Library Modules
import { Component, DoCheck, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Message } from './models';

// Services
import { AuthGuardService } from '../../services/auth-guard.service';
import { ChatService } from '../chat.service';
import { UserAuthService } from '../../auth/user-auth.service';


@Component({
  selector: 'app-ll-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnChanges, DoCheck {
  newMessage: string;
  messages: Message[];
  showLogoutLink: boolean;
  ids = 10;

  cs: string;

  constructor(
    private authGuardService: AuthGuardService,
    private chatService: ChatService,
    private router: Router,
    private userAuthService: UserAuthService
  ) {
    this.initMessages();
    this.showLogoutLink = true;
    this.cs = '';
  }

  initMessages() {
    let msg = new Message();
    msg.id = 1;
    msg.body = 'Hi, I am Amy your personal shopper. is there a specific event you are shopping for today?';
    msg.sender = 'Malik';
    msg.avatar = 'http://placehold.it/40x40';
    msg.type = 'R';
    this.messages = [msg];

    msg = new Message();
    msg.id = 2;
    msg.body = 'Hi, this is my first time here.';
    msg.sender = 'Shahzad';
    msg.avatar = 'http://placehold.it/40x40';
    msg.type = 'S';
    this.messages.push(msg);
  }

  logout() {
    this.userAuthService.logoutUser()
      .then(
        user => {
          // this.user = new User().deserialize(user);
          // if (this.user && this.user.isActive) {
          // }
          this.authGuardService.removeLocalUser();
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        }
      )
  }

  sendMessage() {
    let msg = new Message();
    msg.id = this.ids + 1;
    msg.body = this.newMessage;
    msg.avatar = 'http://placehold.it/40x40';
    msg.type = 'S';
    this.messages.push(msg);

    let responseMessage = new Message();
    responseMessage.id = this.ids + 2;
    responseMessage.body = `Got Your message, on ${new Date().toLocaleTimeString()}`;
    responseMessage.avatar = 'http://placehold.it/40x40';
    responseMessage.type = 'R';
    this.messages.push(responseMessage);
    this.ids = this.ids + 2;

    // this.chatService.sendMessage(this.newMessage, this.cs)
    //   .then(
    //     response => {
    //       debugger;
    //
    //       let responseMessage = new Message();
    //       responseMessage.body = response.output;
    //       responseMessage.avatar = 'http://placehold.it/40x40';
    //       responseMessage.type = 'R';
    //       this.messages.push(responseMessage);
    //
    //       this.cs = response.cs;
    //     },
    //     error => {
    //       debugger;
    //       console.error(error);
    //     }
    //   )

    this.newMessage = '';
  }

  ngOnChanges() {
    // this.scrollToLastMessage();
  }

  ngDoCheck() {
    this.scrollToLastMessage();
  }

  scrollToLastMessage() {
    // this.wait(5000);
    let messages = document.getElementsByClassName('message-container');
    let lastMessage = messages[messages.length - 1];
    if (lastMessage) {
      lastMessage.scrollIntoView();
    }
  }

  // wait(ms) {
  //   let start = new Date().getTime();
  //   let end = start;
  //   while(end < start + ms) {
  //     end = new Date().getTime();
  //   }
  // }


  trackByMessages(index: number, msg: Message): number { return msg.id; }
}
