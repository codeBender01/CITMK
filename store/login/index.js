import { action } from "easy-peasy";

const loginModel = {
  isLoggedIn: false,
  role: "",
  setIsLoggedIn: action((state, payload) => {
    state.isLoggedIn = payload;
  }),
  setRole: action((state, payload) => {
    state.role = payload;
  }),
};

export default loginModel;
