import axios from "axios";
import store from "../store";

const axiosInstance = axios.create({
  baseURL: "https://apt-booking-api.herokuapp.com/",
}); /* Так зробили бо base url може бути різний і API може бути декілька. І можна axiosInstance перевикористати і застосувати в тих запитах яких ти хочеш*/

/* Перед тим як зробити запит можна задати якісь дії */
axiosInstance.interceptors.request.use(
  (config) => {
    /* Провіряєм якщо є token  в нашому store(localstorage) то ми будем встановлювати його в хедерси нашого запиту */
    const { token } = store.state.auth;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; /*  Якщо є токен встановлюєм заголовок Authorization */
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
