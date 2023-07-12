import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import styles from "./messages.styles";
import MessageCard from "../../components/MessageCard/MessageCard";
import useFetch from "../../hooks/useFetch";
import NoData from "../../components/NoData/NoData";
import { colors } from "../../constants/theme";
import { useStoreActions, useStoreState } from "easy-peasy";

function Messages() {
  const { data, error, refetch, isLoading } = useFetch("message");

  const refresh = useStoreState(
    (state) => state.messagesModel.isMessagesRefresh
  );
  const setRefresh = useStoreActions(
    (actions) => actions.messagesModel.setIsMessagesRefresh
  );

  useEffect(() => {
    if (refresh) {
      refetch();
      setTimeout(() => {
        setRefresh(false);
      }, 2000);
    }
  }, [refresh]);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color={colors.navbarBg} size="small" />}
      {data.messages ? (
        <FlatList
          data={data.messages}
          renderItem={(msg) => {
            return (
              <MessageCard
                key={msg.item.description}
                name={msg.item.name}
                email={msg.item.email}
                message={msg.item.description}
                phoneNumber={msg.item.number}
                read={msg.item.read}
                id={msg.item._id}
              />
            );
          }}
          refreshControl={
            <RefreshControl
              colors={[colors.greenAccept]}
              refreshing={refresh}
              onRefresh={() => refetch()}
            />
          }
        />
      ) : isLoading ? null : (
        <NoData text={"В письмах пусто"} />
      )}
    </View>
  );
}

export default Messages;
