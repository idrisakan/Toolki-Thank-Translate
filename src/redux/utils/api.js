import axios from "axios";

export const api = axios.create({
    baseURL: 'https://text-translator2.p.rapidapi.com',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '27b28f8130msh2c33ab1d1e83a04p1112e5jsn44bbcd53bfe8',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
})