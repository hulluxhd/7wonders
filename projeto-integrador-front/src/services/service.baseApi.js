import axios from 'axios';

const baseApi = axios.create({
    baseURL: 'http://18.219.177.231:8080'
});

export default baseApi;
