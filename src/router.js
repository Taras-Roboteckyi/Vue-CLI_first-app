//Тут прописуються всі настройки роутінга///////
import VueRouter from "vue-router";

import Bar from "./pages/BarApp";
import Foo from "./pages/FooApp";
import HomePage from "./pages/HomePage";
import ApartmentPage from "./pages/Apartment";

//Щоб роутер працював, потрібно на основі компонентів створити масив роутерів////
const routes = [
  {
    path: "/Foo", //Задаєм шляхи які ми хочеш щоб переходило по сторінці///
    component: Foo,
  },
  {
    path: "/Bar", //Задаєм шляхи які ми хочеш щоб переходило по сторінці///
    component: Bar,
  },
  {
    path: "/", //Задаєм кореневий шлях, щоб переходило по сторінці///
    component: HomePage,
  },
  {
    path: "/apartment", //Задаєм кореневий шлях, щоб переходило по сторінці///
    component: ApartmentPage,
  },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
