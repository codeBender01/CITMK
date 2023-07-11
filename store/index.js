import { createStore } from "easy-peasy";

import usersModel from "./users/users";
import loginModel from "./login";
import servicesModel from "./services";
import ordersModel from "./orders";
import messagesModel from "./messages";

const store = createStore({
  usersModel,
  loginModel,
  servicesModel,
  ordersModel,
  messagesModel,
});

export default store;
