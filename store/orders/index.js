import { action } from "easy-peasy";

const ordersModel = {
  isOrdersRefresh: false,
  setIsOrderRefresh: action((state, payload) => {
    state.isOrdersRefresh = payload;
  }),
};

export default ordersModel;
