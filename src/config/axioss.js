import { baseUrl } from './env'
import axios from 'axios'
import router from '@/router'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
    console.log(router);
    type = type.toUpperCase();
    let config = {
        baseURL:  baseUrl,
        // timeout: 60 * 1000, // Timeout
        withCredentials: true, // Check cross-site Access-Control
    };
    const _axios = axios.create(config);
    if (type === 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        });

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
        const response = await _axios.get(url);
        const result = response.data;
        if (result === "notlogin") {
            router.replace("/?path=" + router.currentRoute.fullPath);
            return null;
        }
        return result;
    }else {
        const response = await _axios.post(url, data);
        const result = response.data;
        if (result === "notlogin") {
            router.replace("/?path=" + router.currentRoute.fullPath);
            return null;
        }
        return result;
    }
}
