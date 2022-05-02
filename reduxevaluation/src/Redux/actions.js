// action types
export const FETCH_NEW_ORDER = "FETCH_NEW_ORDER";
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"




// Action Creators
export const addOrder = (order) => ({type: FETCH_NEW_ORDER, payload:order})
export const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const logout = (data) => {
    return {
        type: LOGOUT,
        payload: data
    }
}