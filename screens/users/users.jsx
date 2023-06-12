import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./users.styles";
import UserCard from "../../components/UserCard/UserCard";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants/theme";

function Users({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1]}
        renderItem={(item) => <UserCard user={item.item} />}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("AddUser")}
        style={styles.addUserBtn}
      >
        <AntDesign name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default Users;
