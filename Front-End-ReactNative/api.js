// api.js

import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.225.58:8000/api', // ← IP de ton PC // IP locale de mon PC
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});
