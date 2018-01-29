

export class AuthAction {
    static LOGIN = "LOGIN";
    static LOGOUT = "LOGOUT"

    static userLogin = (payload) => ({
        type: AuthAction.LOGIN,
        payload
    })
    static logout = (payload) => ({
        type: AuthAction.LOGOUT,
        payload
    })
}