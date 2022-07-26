import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { LoginCredential } from '../Types/login-credentials';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/auth.action';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
  loginForm = this.fb.nonNullable.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthentificationService,
    private router: Router,
    private store: Store<AppState>
  ) {}

 
  logIn(): void {
    if (this.loginForm.valid) {
      const loginCredentials = {
        username: this.loginForm.value.username ?? '',
        password: this.loginForm.value.password ?? '',
      };

      this.store.dispatch(login({ loginCredentials }));
    }
  }
}
