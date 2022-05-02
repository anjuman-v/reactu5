import { LOGIN, LOGOUT } from "./actions";

const init = {
   username: "",
   role: "",
   isLoggedin: false,
};

export const reducer = (store = init, { type, payload }) => {
  
   switch (type) {
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

