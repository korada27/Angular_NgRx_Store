import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { AuthActionTypes, LogIn, LogInFailure, LogInSuccess } from '../actions/auth.actions';
import { User } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {
    constructor(
        private actions: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

    @Effect()
    Login: Observable<any> = this.actions
        .pipe(
            ofType<LogIn>(AuthActionTypes.LOGIN),
            map(action => action.payload),
            switchMap((payload: User) => this.authService.logIn(payload.username, payload.password)),
            switchMap((user) => of(new LogInSuccess({ token: user.token, user }))),
            catchError(error => of(new LogInFailure({ error })))
        );

    @Effect()
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.token);
            this.router.navigateByUrl('/dashboard');
        })
    );

    @Effect()
    LogInFailure: Observable<any> = this.actions.pipe(
      ofType(AuthActionTypes.LOGIN_FAILURE),
      tap(er => {console.log('Error', er); })
    );

    @Effect()
    public LogOut: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap((user) => {
            localStorage.removeItem('token');
            this.router.navigateByUrl('/');
        })
    );
}
