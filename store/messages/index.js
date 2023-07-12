import { action } from "easy-peasy";

const messagesModel = {
  isMessagesRefresh: false,
  unreadMesssageCount: 0,
  setIsMessagesRefresh: action((state, payload) => {
    state.isMessagesRefresh = payload;
  }),
  setUnreadMessageCount: action((state, payload) => {
    state.unreadMessageCount = payload;
  }),
};

export default messagesModel;
