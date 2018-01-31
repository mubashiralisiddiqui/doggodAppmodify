

export class AuthAction {
    static LOGIN = "LOGIN";
    static LOGOUT = "LOGOUT";
    static VERIFIEDEMAIL = "VERIFIEDEMAIL"

    static userLogin = (payload) => ({
        type: AuthAction.LOGIN,
        payload
    })
    static logout = (payload) => ({
        type: AuthAction.LOGOUT,
        payload
    })
    static verifyemail = (payload) => ({
        type: AuthAction.VERIFIEDEMAIL
    })
}