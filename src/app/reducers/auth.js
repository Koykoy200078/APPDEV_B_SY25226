import {
  USER_LOGIN_COMPLETED,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESET,
} from '../actions';

export default function reducer(state = {}, action) {
  console.log(action.type);
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        data: null,
        isLoading: true,
        isError: false,
      };

    case USER_LOGIN_COMPLETED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
      };
    case USER_LOGIN_RESET:
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: false,
      };
  }
}
