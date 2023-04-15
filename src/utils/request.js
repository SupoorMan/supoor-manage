import axios from "axios";
import { baseURL } from '../config'

var instance = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        'token': 'hello,ango!'
    }
})


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function doGet(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(baseURL + url, {
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
        axios.post(baseURL + url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

// 请求前拦截器
instance.interceptors.request.use(function (cnf) {
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