import { action } from "easy-peasy";

const messagesModel = {
  isMessagesRefresh: false,
  setIsMessagesRefresh: action((state, payload) => {
    state.isMessagesRefresh = payload;
  }),
};

export default messagesModel;
