import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginModeOn = true;
  isLoading = false;
  error = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwithMode() {
    this.isLoginModeOn = !this.isLoginModeOn;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) { return; }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginModeOn) {
      // ...
    } else {
      this.authService
      .signUp(email, password)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
        },
        error: (errorRes) => {
          if (errorRes.error.error.message === 'EMAIL_EXISTS') {
            this.error = 'This email alrede exists on our service. Plase try using a different one.';
          } else {
            this.error = errorRes.error.error.message;
          }
          this.isLoading = false;
        }
      });
    }
    form.reset();
  }

}
