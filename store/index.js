import { createStore } from "easy-peasy";
import ordersModel from "./orders/orders";

const store = createStore({
  ordersModel,
});

export default store;
