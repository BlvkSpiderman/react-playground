import axios from 'axios';

const TOKEN = 'cdhhh0qad3i07d1j9e3gcdhhh0qad3i07d1j9e40';

export default axios.create({
    baseURL:'https://finnhub.io/api/v1',
    params: {
        token: TOKEN
    }
})