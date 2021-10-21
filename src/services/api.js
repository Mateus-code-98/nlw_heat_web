const axios = require('axios');

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
})

api.interceptors.request.use(async (config) => {
    const token = await localStorage.getItem('@NLW_HEAT:token')
    config.headers.authorization = `Bearer ${token}`;
    return config
});

module.exports = { api };