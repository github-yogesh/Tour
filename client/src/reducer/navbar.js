const initialState = null

const LoginNavbar = (state = initialState, action) =>{

    switch(action.type) {
        case "LOGIN" : return state = "login"
        case "LOGOUT" : return state = "logout"
        default : return state
    }
}

export default LoginNavbar