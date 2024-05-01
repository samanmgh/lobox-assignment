import axios, {AxiosResponse} from 'axios';
import qs from 'qs';

axios.defaults.headers["content-type"] = "application/json";
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Accept-Language"] = "fa";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL_V1;

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const request = {
    get: <T>(url: string, data: object) => axios.get<T>(url + "?" + qs.stringify(data)).then(responseBody),
    post: <T>(url: string, body?: object) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body?: object) => axios.post<T>(url, body).then(responseBody),
};
