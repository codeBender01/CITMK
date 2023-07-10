import { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./servicelist.styles";
import useFetch from "../../../hooks/useFetch";

function ServiceList() {
  const { data, isLoading, refetch } = useFetch("service");

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Список</Text>
        <View style={styles.service}>
          <View>
            <Text style={styles.serviceName}>Заправка</Text>
            <Text style={styles.serviceDesc}>краткое описание услуги</Text>
          </View>
          <TouchableOpacity style={styles.serviceBtn}>
            <Text style={styles.serviceBtnText}>Заказать</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ServiceList;
