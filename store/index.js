import { createStore } from "easy-peasy";

import usersModel from "./users/users";
import wallModel from "./wallpaper/wallpaper";

const store = createStore({
  usersModel,
  wallModel,
});

export default store;
