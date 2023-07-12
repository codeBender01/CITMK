import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import styles from "./services.styles";
import useFetch from "../../hooks/useFetch";
import { useStoreState, useStoreActions } from "easy-peasy";
import axios from "axios";
import server from "../../constants/server";

function Services({ navigation }) {
  const { data, isLoading, refetch, error } = useFetch("service");

  const baseUrl = `http://${
    Platform.OS === "android" ? server : localhost
  }:5005/api/service`;

  const refresh = useStoreState(
    (state) => state.servicesModel.isServicesRefresh
  );
  const setRefresh = useStoreActions(
    (actions) => actions.servicesModel.setServicesRefresh
  );

  useEffect(() => {
    if (error) {
      refetch();
    }

    setTimeout(() => {
      if (refresh) {
        refetch();
      }
      setRefresh(false);
    }, 1000);
  }, [refresh]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.editServicesText}>Редактировать услуги</Text>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data.services}
          renderItem={(ser) => (
            <ServiceCard
              ser={ser}
              serviceName={ser.item.Options}
              serviceDesc={ser.item.description}
              onDelete={async () => {
                setRefresh(true);
                await axios.delete(`${baseUrl}/${ser.item._id}`).then(() => {
                  setRefresh(false);
                });
              }}
            />
          )}
        />
        <TouchableOpacity
          style={styles.addService}
          onPress={() => {
            navigation.navigate("AddService");
          }}
        >
          <Text style={styles.addServiceText}>Добавить новую</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Services;
