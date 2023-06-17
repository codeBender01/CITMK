import axios from "axios";
import { action, thunk } from "easy-peasy";

const ordersModel = {
  orders: [],
  setOrders: action((state, payload) => {
    state.orders = payload;
  }),
  getAcceptedOrders: thunk(async (actions, payload) => {
    const { data } = await axios.get("/");
    console.log(data);
    actions.setOrders(data);
  }),
};

export default ordersModel;
