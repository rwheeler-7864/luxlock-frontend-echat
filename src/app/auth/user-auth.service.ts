// Library Modules
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// Environments
import { environment } from '../../environments/environment';


@Injectable()
export class UserAuthService {
  private authUrl = `http://${environment.apiBaseUrl}` + '/api/users/v1/auth/';
  private signupUrl = `http://${environment.apiBaseUrl}` + '/api/users/v1/signup/';
  redirectUrl: string;

  constructor(
    private http: Http,
  ) { }

  logIn(email, password) {
    const data = {
      email: email,
      password: password
    };

    return this.http.post(this.authUrl, data)
      .toPromise()
      .then((response: Response) => {
        return response.json();
      })
      .catch((error: any) => {
        return Promise.reject(error.message || error)
      });
  }

  register(name, email, password) {
    // const data = {
    //   name: name,
    //   email: email,
    //   password: password,
    // };

    const data = {
      email: email,
      password: password,
      confirm_password: name,
    };

    return this.http.post(this.signupUrl, data)
      .toPromise()
      .then((response: Response) => {
        return response.json();
      })
      .catch((error: any) => {
        return Promise.reject(error.message || error)
      });
  }

  logoutUser() {
    return this.http.get(this.authUrl)
      .toPromise()
      .then((response: Response) => {
        return response.json();
      })
      .catch((error: any) => {
        return Promise.reject(error.message || error)
      });
  }
}
