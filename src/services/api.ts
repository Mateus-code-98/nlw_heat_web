import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
})

api.interceptors.request.use(async (config: any) => {
    const token = await localStorage.getItem('@NLW_HEAT:token')
    config.headers.authorization = `Bearer ${token}`;
    return config
});

export { api }