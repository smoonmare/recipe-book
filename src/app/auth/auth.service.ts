import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { key as apiKey} from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
     return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(errorRes => {
        let errorMessage = 'An ukknown error occured. Please try again later.';
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(() => errorMessage);
        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email alrede exists on our service. Plase try using a different one.';
        }
        return throwError(() => errorMessage);
      })
    );
  }
}
