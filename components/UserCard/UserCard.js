import React from "react";
import { View, Text } from "react-native";
import styles from "./userCard.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../constants/theme";

function UserCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.orgName}>Название организации</Text>
      <Text>Название отдела</Text>
      <MaterialIcons
        name="keyboard-arrow-down"
        size={24}
        color={colors.greenAccept}
      />
    </View>
  );
}

export default UserCard;
