import axios from "axios";
import { baseURL } from '../config'


var instance = axios.create({
    baseURL,
    timeout: 30000,
    // withCredentials: true,
    // crossDomain: true,
    headers: {
        'token': sessionStorage.getItem('token') == null ? -1 : sessionStorage.getItem('token'),
        'X-PRINCIPAL': sessionStorage.getItem('PRINCIPAL') == null ? -1 : sessionStorage.getItem('PRINCIPAL'),
        'Source': 'web',
        'Content-Type': 'application/json; charset=UTF-8'
    }
})


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function doGet(url, params) {
    return new Promise((resolve, reject) => {
        instance.get(baseURL + url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function doPost(url, params) {
    return new Promise((resolve, reject) => {
        instance.post(baseURL + url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

// 请求前拦截器
instance.interceptors.request.use(function (cnf) {
    if (sessionStorage.getItem('token')) {
        cnf.headers.token = sessionStorage.getItem('token');
    }
    return cnf;
}, function (e) {
    return Promise.reject(e)
})

// 响应拦截器
instance.interceptors.response.use(function (res) {
    return res;
}, function (e) {
    return Promise.reject(e)
})

export default instance;