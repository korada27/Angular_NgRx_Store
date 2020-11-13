import {ActionReducerMap} from '@ngrx/store';
import {reducer} from './auth.reducers';
import {AppState} from '../state/app.state';

export const appReducer : ActionReducerMap<AppState,any> = {
    auth: reducer
}