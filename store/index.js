import { createStore } from "easy-peasy";

import usersModel from "./users/users";
import loginModel from "./login";

const store = createStore({
  usersModel,
  loginModel,
});

export default store;
