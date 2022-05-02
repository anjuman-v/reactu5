// action types

// Action Creators


export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

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