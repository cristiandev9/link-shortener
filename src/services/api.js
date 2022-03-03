
import axios from 'axios';
export const key = "b97d17f9a703878c0a3f0271f8ca505c36506ac8";
const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4/",
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api