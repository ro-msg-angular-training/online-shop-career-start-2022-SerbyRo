import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { LoginCredential } from 'src/app/components1/Types/login-credentials';
import { User } from 'src/app/components1/Types/user';

export const login = createAction(
  '[User] Login',
  props<{ loginCredentials: LoginCredential }>()
);

export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[User] Login Failure',
  props<{ response: HttpErrorResponse }>()
);
