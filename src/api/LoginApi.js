import axios, { doGet, doPost } from "../utils/request";

// login
export const $login = async (params) => {
    let { headers, data } = await doPost('/auth/login', params)

    if (headers.token) {
        if (sessionStorage.getItem('token') != null) {
            sessionStorage.clear();
        }
        sessionStorage.setItem('token', headers.token)
        sessionStorage.setItem('PRINCIPAL', data.data)
    }
    return data;
}