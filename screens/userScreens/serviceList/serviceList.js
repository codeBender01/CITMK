import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Platform } from "react-native";
import styles from "./servicelist.styles";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import server from "../../../constants/server";

function ServiceList() {
  const { data, isLoading, refetch } = useFetch("service");
  const [username, setUsername] = useState("");
  const [org, setOrg] = useState("");

  useEffect(() => {
    const storage = async () => {
      const res = await AsyncStorage.getItem("user");
      const data = JSON.parse(res);
      console.log(data.name);

      setUsername(data.name);
      setOrg(data.organization);
    };

    storage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Список</Text>

        <FlatList
          data={data.services}
          renderItem={(ser) => (
            <View style={styles.service}>
              <View>
                <Text style={styles.serviceName}>{ser.item.Options}</Text>
                <Text style={styles.serviceDesc}>{ser.item.description}</Text>
              </View>
              <TouchableOpacity
                style={styles.serviceBtn}
                onPress={async () => {
                  await axios
                    .post(
                      `http://${
                        Platform.OS === "android" ? server : "localhost"
                      }:5005/api/service/sended/${ser.item._id}`,
                      {
                        description: ser.item.description,
                        comments: "",
                        Options: ser.item.Options,
                        userName: username,
                        Organization: org,
                      }
                    )
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                <Text style={styles.serviceBtnText}>Заказать</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default ServiceList;
