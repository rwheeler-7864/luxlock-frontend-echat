import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'LuxLoch Chat';
  appClose: boolean;

  constructor() {
    this.appClose = true;
  }
}
