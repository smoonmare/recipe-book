import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { key as apiKey } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An ukknown error occured. Please try again later.';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => errorMessage);
    }
    console.log('Error:', errorRes.error.error.message);
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email alrede exists on our service. Plase try using a different one.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Invalid crenedtials. Please try with a different credentials or simply Sign Up.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid crenedtials. Please try with a different credentials or simply Sign Up.';
        break;
    }
    return throwError(() => errorMessage);
  }
}
