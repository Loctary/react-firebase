const USER_SIGN_IN = 'USER_SIGN_IN';
const USER_SIGN_OUT = 'USER_SIGN_OUT';

const initialState = {
  authUser: null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_SIGN_IN:
      return { ...state, authUser: action.payload };
    case USER_SIGN_OUT:
      return { ...state, authUser: null };
    default:
      return state;
  }
}

export const userSignIn = payload => ({ type: USER_SIGN_IN, payload });
export const userSignOut = () => ({ type: USER_SIGN_OUT });
