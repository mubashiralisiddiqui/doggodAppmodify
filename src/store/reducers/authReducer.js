import { AuthAction } from '../actions/authActions'
const initialState = {
    isLoggedIn: false,
    detail: {}
}

export default function (state = initialState, action) {
    console.log(action.payload)
    
    switch (action.type) {

        case AuthAction.LOGIN:
            return { ...state, isLoggedIn: true, detail: action.payload };
            break;
        case AuthAction.LOGOUT:
            return {
                isLoggedIn: false
            }
            break;
        default:
            return state;
    }
}