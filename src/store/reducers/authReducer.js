import { AuthAction } from '../actions/authActions'
const initialState = {
    isLoggedIn: false,
    detail: {},
    verified: true
}

export default function (state = initialState, action) {
    console.log(action.payload)

    switch (action.type) {

        case AuthAction.LOGIN:
            return { ...state, isLoggedIn: true, detail: action.payload, verified: true };
            break;
        case AuthAction.LOGOUT:
            return {
                isLoggedIn: false
            }
            break;
        case AuthAction.VERIFIEDEMAIL:
            return {
                ...state, verified: false
            }
        default:
            return state;
    }
}