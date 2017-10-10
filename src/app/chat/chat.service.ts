// Library Modules
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ChatService {
  private authUrl = 'https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

  constructor(
    private http: Http,
  ) { }

  sendMessage(message, cs) {
    return this.http.get(`${this.authUrl}` )
      .toPromise()
      .then((response: Response) => {
        return response.json();
      })
      .catch((error: any) => {
        return Promise.reject(error.message || error)
      });
  }
}
