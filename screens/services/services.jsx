import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import styles from "./services.styles";

function Services({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.editServicesText}>Редактировать услуги</Text>
      <View>
        <ServiceCard />
        <TouchableOpacity
          style={styles.addService}
          onPress={() => {
            navigation.navigate("AddService");
          }}
        >
          <Text style={styles.addServiceText}>Добавить новую</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Services;
