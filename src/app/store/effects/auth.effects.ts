import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of, map, catchError, tap } from 'rxjs';
import { AuthentificationService } from 'src/app/components1/authentification.service';
import { User } from 'src/app/components1/Types/user';
import { login, loginSuccess, loginFailure } from '../actions/auth.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthentificationService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ loginCredentials }) => {
        return this.authService.login2(loginCredentials).pipe(
          map((user: User) => loginSuccess({ user })),
          catchError((response: HttpErrorResponse) =>
            of(loginFailure({ response }))
          )
        );
      })
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          alert('You have successfully logged in!');
          this.router.navigateByUrl('/ProductsList');
        })
      ),
    { dispatch: false }
  );

  loginError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFailure),
        tap(() => alert('The credentials you introduced do not exist!'))
      ),
    { dispatch: false }
  );
}
