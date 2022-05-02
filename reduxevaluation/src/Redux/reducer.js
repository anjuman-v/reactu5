import { FETCH_NEW_ORDER } from './actions';
import { LOGIN, LOGOUT } from "./actions";
const init = {
  username: "",
  role: "",
  isLoggedin: false,
  order: [],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case FETCH_NEW_ORDER:
      return {store, order: payload}
      case LOGIN:
       
        return {
           ...store,
           username: payload.username,
           role: payload.role,
           isLoggedin: true,
        };

     case LOGOUT:
        return {
           ...store,
           isLoggedin: false,
        };
        
    default:
      return store;
  }
};




