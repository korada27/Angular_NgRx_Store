import { User } from '../../models/user.model';
import { AuthActionTypes, All } from '../actions/auth.actions';
import { initialAuthState, AuthState  } from '../state/auth.state';


export function reducer(state = initialAuthState, action: All): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    token: action.payload.token,
                    user: action.payload.user
                },
                errorMessage: null
            }
        case AuthActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                errorMessage: 'Incorrect email and/or password.'
            };
        }
        case AuthActionTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    token: action.payload.token,
                    user: action.payload.username
                },
                errorMessage: null
            };
        }
        case AuthActionTypes.SIGNUP_FAILURE: {
            return {
                ...state,
                errorMessage: 'That email is already in use.'
            };
        }
        case AuthActionTypes.LOGOUT: {
            return initialAuthState;
        }
        default: {
            return state;
        }
    }
}