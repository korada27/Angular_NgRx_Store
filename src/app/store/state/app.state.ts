import { createFeatureSelector } from '@ngrx/store';
import {AuthState,initialAuthState} from '../state/auth.state';

export interface AppState{
    auth: AuthState
}

export const initialAppState: AppState = {
    auth: initialAuthState
}

export const selectAuthState = createFeatureSelector<AppState>('auth');

export function getInialState(): AppState {
    return initialAppState;
  }
