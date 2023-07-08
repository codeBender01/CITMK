import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  RefreshControl,
  Platform,
} from "react-native";
import styles from "./users.styles";
import UserCard from "../../components/UserCard/UserCard";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants/theme";
import useFetch from "../../hooks/useFetch";
import NoData from "../../components/NoData/NoData";
import { useStoreState, useStoreActions } from "easy-peasy";
import axios from "axios";
import server from "../../constants/server";

function Users({ navigation }) {
  const { data, isLoading, error, refetch } = useFetch("user");

  const refresh = useStoreState((state) => state.usersModel.refresh);
  const setCondition = useStoreActions(
    (actions) => actions.usersModel.setCondition
  );

  const baseUrl = Platform.OS === "android" ? server : "localhost";

  useEffect(() => {
    if (error) {
      refetch();
    }

    setTimeout(() => {
      if (refresh) {
        refetch();
      }
      setCondition(false);
    }, 1000);
  }, [refresh]);

  const onDelete = async (id) => {
    setCondition(true);
    await axios.delete(`http://${baseUrl}:5005/api/user/${id}`).then((res) => {
      setCondition(false);
    });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.navbarBg} />
      ) : (
        <FlatList
          data={data.users}
          renderItem={(user) => (
            <UserCard user={user} onDelete={() => onDelete(user.item._id)} />
          )}
          refreshControl={
            <RefreshControl
              colors={[colors.greenAccept]}
              refreshing={refresh}
              onRefresh={() => refetch()}
            />
          }
        />
      )}

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
