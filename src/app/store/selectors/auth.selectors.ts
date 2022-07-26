import { createSelector } from '@ngrx/store';
import { admin, customer } from 'src/app/components1/Types/user';
import { AppState } from '../states/app.state';
import { AuthentificationState } from '../states/auth.state';

export const authRoleState = (state: AppState) => state.auths;
export const adminRoleSelector = createSelector(
  authRoleState,
  (state: AuthentificationState) =>
    state.loggedUser?.roles.includes(admin) || false
);

export const customerRoleSelector = createSelector(
  authRoleState,
  (state: AuthentificationState) =>
    state.loggedUser?.roles.includes(customer) || false
);

export const userSelector = createSelector(
  authRoleState,
  (state: AuthentificationState)=>
     state.loggedUser
)
