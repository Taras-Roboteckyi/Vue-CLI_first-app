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
    name: "homepage",
  },
  {
    path: "/apartment/:id",
    component: ApartmentPage,
    name: "apartment", //Система nameів, для того щоб дати імя кожному роуту///
  },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
