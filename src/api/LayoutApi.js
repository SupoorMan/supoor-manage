import axios, { doGet, doPost } from "../utils/request";

// loading web
export const $mw = async () => {
    let params = {
        param: sessionStorage.getItem('PRINCIPAL')
    }

    let { data } = await doGet('/model/mw', params)
    console.log(data);
    return 'data';
}