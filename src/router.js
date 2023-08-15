//Тут прописуються всі настройки роутінга///////
import VueRouter from "vue-router";

import Bar from "./pages/BarApp";
import Foo from "./pages/FooApp";
import HomePage from "./pages/HomePage";
import ApartmentPage from "./pages/Apartment";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";

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
    path: "/apartment/:id", //створюєм динамічний маршрут //
    component: ApartmentPage,
    name: "apartment", //Система nameрнів, для того щоб дати імя кожному роуту///
  },
  {
    path: "/login", //створюєм  маршрут //
    component: LoginPage,
    name: "login-page",
  },
  {
    path: "/registration", //створюєм  маршрут //
    component: RegistrationPage,
    name: "registration-page",
  },
  {
    path: "*", //такий роутер підходить до любого шляху і спрацьовує коли не відпрацював ні один із цих верхніх роутів//
    component: ErrorPage,
    name: "error-page",
  },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
