import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./messages.styles";
import MessageCard from "../../components/MessageCard/MessageCard";
import useFetch from "../../hooks/useFetch";
import NoData from "../../components/NoData/NoData";
import { colors } from "../../constants/theme";
import { useStoreActions, useStoreState } from "easy-peasy";

function Messages() {
  const { data, isLoading } = useFetch("message");

  const refresh = useStoreState(
    (state) => state.messagesModel.isMessagesRefresh
  );
  const setRefresh = useStoreActions(
    (actions) => actions.messagesModel.setIsMessagesRefresh
  );

  useEffect(() => {
    if (refresh) {
      setTimeout(() => {
        setRefresh(false);
      }, 2000);
    }
  }, [refresh]);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color={colors.navbarBg} size="small" />}
      {data.messages && data.messages.length > 0 ? (
        data.messages.map((msg) => {
          return (
            <MessageCard
              key={msg.description}
              name={msg.name}
              email={msg.email}
              message={msg.description}
              phoneNumber={msg.number}
              read={msg.read}
              id={msg._id}
            />
          );
        })
      ) : isLoading ? null : (
        <NoData text={"В письмах пусто"} />
      )}
    </View>
  );
}

export default Messages;
