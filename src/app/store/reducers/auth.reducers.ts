import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess } from '../actions/auth.action';
import { initialAuthentificationState } from '../states/auth.state';

export const authReducer = createReducer(
  initialAuthentificationState,

  on(login, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loginSuccess, (state, { user }) => ({
    ...state,
    loggedUser: user,
    status: 'success',
    error: '',
  }))
);
