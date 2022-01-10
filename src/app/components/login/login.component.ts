import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  setBg: boolean = false;
  show: boolean = true

  
  constructor() {}

  ngOnInit(): void {
    this.changeBg()
    this.changeScreen()

  }

  // change bg
  changeBg() {
    setTimeout(() => {
      this.setBg = !this.setBg;
    }, 1000);
  }

  // change to main screen
  changeScreen() {
    setTimeout(() => {
      this.show = !this.show
    }, 3500);
  }
}
