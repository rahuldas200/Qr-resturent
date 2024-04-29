const BASE_URL = 'http://localhost:4000/api/v1'

export const authEndpoints = {
    SEND_OPT : BASE_URL + '/auth/sendotp',
    LOGIN_API : BASE_URL+"/auth/login",
    REGISTATION:BASE_URL+"/auth/registation",
    GET_USER_DATA_API:BASE_URL + "/auth/getuser",
}