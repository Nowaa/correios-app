import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rastreiocorreios-api.herokuapp.com/tracking'
})

export default api;