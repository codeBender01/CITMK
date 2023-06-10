import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./users.styles";
import UserCard from "../../components/UserCard/UserCard";

function Users() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1]}
        renderItem={(item) => <UserCard user={item.item} />}
      />
    </View>
  );
}

export default Users;
