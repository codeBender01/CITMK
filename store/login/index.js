import { action } from "easy-peasy";

const loginModel = {
  isLoggedIn: false,
  role: "",
  tabs: [],
  setIsLoggedIn: action((state, payload) => {
    state.isLoggedIn = payload;
  }),
  setRole: action((state, payload) => {
    state.role = payload;
  }),
  setTabs: action((state, payload) => {
    state.tabs = payload;
  }),
};

export default loginModel;
