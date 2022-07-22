import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.nonNullable.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('',Validators.required),
  }
  );

  constructor(private fb: FormBuilder, private authService: AuthentificationService,private router: Router) { }

  ngOnInit(): void {
  }
  logIn(): void {

    if (this.loginForm.valid)
    {
      const username = this.loginForm.value.username ?? '';
      const password = this.loginForm.value.password ?? '';

    this.authService.login(username,password).subscribe(
        {
          next: () => {
            const redirectUrl = this.authService.redirectUrl ?? '/ProductsList';
            this.router.navigateByUrl(redirectUrl);
          },
          error: () => {
            alert('Incorrect credentials! Please try again!');
          },
        }
    );
    }
    
  }
}
