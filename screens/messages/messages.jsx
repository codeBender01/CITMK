import React from "react";
import { View, Text } from "react-native";
import styles from "./messages.styles";
import MessageCard from "../../components/MessageCard/MessageCard";

function Messages() {
  return (
    <View style={styles.container}>
      <MessageCard />
    </View>
  );
}

export default Messages;
