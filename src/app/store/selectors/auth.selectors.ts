import {createSelector} from '@ngrx/store';
import {AuthState} from '../state/auth.state';
import {AppState} from '../state/app.state';

const authState = (state: AppState) => state.auth;

export const selectAuth = createSelector(authState, (state: AuthState) => state);
