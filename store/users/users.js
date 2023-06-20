import axios from "axios";
import { action } from "easy-peasy";

const usersModel = {
  refresh: false,
  setCondition: action((state, payload) => {
    state.refresh = payload;
  }),
};

export default usersModel;
