import { createStore } from "easy-peasy";
import ordersModel from "./orders/orders";
import usersModel from "./users/users";

const store = createStore({
  ordersModel,
  usersModel,
});

export default store;
