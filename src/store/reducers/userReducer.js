import {
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER,
  UPDATE_PASSWORD,
  UPDATE_USER,
} from '../actionTypes';

const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        currentUser: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUser: state.users.find(
          user => user.phoneNumber == action.payload.phoneNumber,
        ),
        isAuthenticated: true,
      };
    case UPDATE_USER: {
      const users = state.users.map(user => {
        if (state.currentUser.phoneNumber === user.phoneNumber) {
          return {
            ...user,
            ...action.payload,
          };
        }
        return user;
      });

      return {
        ...state,
        users,
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        currentUser: null,
      };
    }
    case UPDATE_PASSWORD: {
      const users = state.users.map(user => {
        if (state.currentUser.phoneNumber === user.phoneNumber) {
          return {
            ...user,
            password: action.payload,
          };
        }
        return user;
      });
      return {
        ...state,
        users,
        currentUser: {
          ...state.currentUser,
          password: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
