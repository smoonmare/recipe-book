import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginModeOn = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSwithMode() {
    this.isLoginModeOn = !this.isLoginModeOn;
  }

}
