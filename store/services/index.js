import { action } from "easy-peasy";

const servicesModel = {
  isServicesRefresh: false,
  setServicesRefresh: action((state, payload) => {
    state.isServicesRefresh = payload;
  }),
};

export default servicesModel;
