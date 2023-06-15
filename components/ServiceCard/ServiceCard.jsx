import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import styles from "./servicecard.styles";

function ServiceCard() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.serviceName}>Заправка</Text>
        <Text style={styles.serviceDesc}>краткое описание услуги</Text>
      </View>
      <View style={styles.actionBtns}>
        <TouchableOpacity>
          <Feather name="edit" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="delete" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ServiceCard;
