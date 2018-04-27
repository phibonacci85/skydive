import {
  AuthActions,
  LOGOUT,
  LOGIN,
  REGISTER,
  SET_AUTHENTICATED,
  SET_TOKEN, SET_LOADING,
} from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
  loading: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false,
  loading: false,
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LOGOUT:
      return {
        token: null,
        authenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}

export const getIsAuthenticated = (state: State) => state.authenticated;
export const getAuthToken = (state: State) => state.token;
export const getIsLoading = (state: State) => state.loading;
