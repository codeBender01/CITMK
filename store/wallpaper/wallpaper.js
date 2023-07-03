import { action } from "easy-peasy";

const wallModel = {
  selectedPicture: "",
  pictureRefresh: false,
  setSelectedPicture: action((state, payload) => {
    state.selectedPicture = payload;
  }),
  setRefresh: action((state, payload) => {
    state.pictureRefresh = payload;
  }),
};

export default wallModel;
