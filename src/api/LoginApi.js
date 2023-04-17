import axios, { doPost } from "../utils/request";
import openNotifiy from '../utils/notity'

// login
export const $login = async (params) => {
    console.log('登录请求')
    let { data } = doPost('/auth/login',params)
    openNotifiy('data.message')
    console.log(data)
}