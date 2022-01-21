import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formValid = true;
  eyeImage = '../../../assets/mascara.png';
  hidePassword = true;
  user: UserLogin = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formValid = !this.formValid;
      this.router.navigate(['/dashboard']);
    } else {
      this.formValid = !this.formValid;
    }
  }

  showPassword() {
    this.hidePassword = !this.hidePassword;
    this.eyeImage = this.hidePassword
      ? '../../../assets/mascara.png'
      : '../../../assets/eye.png';
  }
}
