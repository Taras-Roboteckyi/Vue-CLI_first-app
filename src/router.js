//Тут прописуються всі настройки роутінга///////
import VueRouter from "vue-router";

import HomePage from "./pages/HomePage";
import ApartmentPage from "./pages/Apartment";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import MyOrdersPage from "./pages/MyOrders";

//Щоб роутер працював, потрібно на основі компонентів створити масив роутерів////
const routes = [
  {
    path: "/", //Задаєм кореневий шлях, щоб переходило по сторінці///
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartment/:id", //створюєм динамічний маршрут //
    component: ApartmentPage,
    name: "apartment", //Система nameрнів, для того щоб дати імя кожному роуту///
    meta: {
      requiresAuth: true,
    }, //Робим захищений роут.Тобто якщо користувач не залогінений, то користувач не може зайти на сторінку
  },
  {
    path: "/my-orders", //створюєм динамічний маршрут //
    component: MyOrdersPage,
    name: "my-orders", //Система nameрнів, для того щоб дати імя кожному роуту///
    meta: {
      requiresAuth: true,
    }, //Робим захищений роут.Тобто якщо користувач не залогінений, то користувач не може зайти на сторінку
  },
  {
    path: "/login", //створюєм  маршрут //
    component: LoginPage,
    name: "login-page",
    meta: {
      hideForAuth: true,
    }, //Робим захищений роут.Тобто якщо користувач зареєстрований, то не показувати ці сторінки
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

//Є глобальний хук який називається beforeEach, який спрацьовує кожен раз коли є перехід з роута на інший роут. Він приймає три параметри to, from i next
router.beforeEach((to, from, next) => {});
//to - означає на яку сторінку переходить роут. from - означає з якої сторінки. Понятно що перший раз загружаємся то from у нас не існує. І next - самий головний, якщо ми його не застосуєм то не відбудеться перехід з  роута на інший.
export default router;
