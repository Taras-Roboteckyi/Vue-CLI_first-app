//Тут прописуються всі настройки роутінга///////

import Bar from "./pages/BarApp";
import Foo from "./pages/FooApp";
import VueRouter from "vue-router";

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
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
