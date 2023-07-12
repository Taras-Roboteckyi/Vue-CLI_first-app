import axios from "axios";
/* import store from "../store"; */

const axiosInstance = axios.create({
  baseURL: "https://apt-booking-api.herokuapp.com/",
}); /* Так зробили бо base url може бути різний і API може бути декілька. І можна axiosInstance перевикористати і застосувати в тих запитах яких ти хочеш*/

/* axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = store.state.auth;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
); */

export default axiosInstance;
