import { createStore } from "easy-peasy";
import ordersModel from "./orders/orders";
import usersModel from "./users/users";
import wallModel from "./wallpaper/wallpaper";

const store = createStore({
  ordersModel,
  usersModel,
  wallModel,
});

export default store;
