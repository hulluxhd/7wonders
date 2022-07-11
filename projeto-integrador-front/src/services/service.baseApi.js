import axios from 'axios';

const baseApi = axios.create({
    baseURL: 'http://18.117.222.141:8080'
});

export default baseApi;
