import { createStore } from "easy-peasy";

import usersModel from "./users/users";
import loginModel from "./login";
import servicesModel from "./services";

const store = createStore({
  usersModel,
  loginModel,
  servicesModel,
});

export default store;
