// import axios from "axios";

// export const instance = axios.create({
//     baseURL: 'http://localhost:8080',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });

import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    // 'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json' // Устанавливаем заголовок Content-Type для всех запросов
  },
  withCredentials: true,
  proxy: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 8080,
  }
});

// Добавляем перехватчик запросов, чтобы включить токен доступа в заголовки
// instance.interceptors.request.use(
//   (config) => {
//     const accessToken = cookies.get('Access-Token'); // Получаем токен доступа из кук
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`; // Включаем токен доступа в заголовок Authorization
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
