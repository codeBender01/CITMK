import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./servicelist.styles";

function ServiceList() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Список</Text>
        <View style={styles.service}>
          <View>
            <Text>Заправка</Text>
            <Text>краткое описание услуги</Text>
          </View>
          <TouchableOpacity style={styles.serviceBtn}>
            <Text>Заказать</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ServiceList;
