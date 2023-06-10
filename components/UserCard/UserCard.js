import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./userCard.styles";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";
import { colors } from "../../constants/theme";
import FadeInView from "../../animations/FadeInView";

function UserCard() {
  const [isIconPressed, setIsIconPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Название организации</Text>
      <Text style={styles.orgName}>Название отдела</Text>
      <View style={isIconPressed ? styles.arrowUp : styles.arrowDown}>
        <TouchableOpacity
          onPress={() => {
            setIsIconPressed(!isIconPressed);
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={colors.greenAccept}
          />
        </TouchableOpacity>
      </View>
      {isIconPressed ? (
        <FadeInView>
          <View>
            <View style={styles.moreInfo}>
              <MaterialCommunityIcons
                name="email-outline"
                size={26}
                color="black"
              />
              <Text style={styles.infoText}>condom@gmail.com</Text>
            </View>
            <View style={styles.moreInfo}>
              <EvilIcons name="location" size={26} color="black" />
              <Text style={styles.infoText}>Gorogly şayoly</Text>
            </View>
            <View style={styles.actionBtns}>
              <TouchableOpacity style={{ ...styles.btn, ...styles.btnEdit }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: 600,
                    color: colors.white,
                    fontSize: 14,
                  }}
                >
                  Редактировать{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                title="Удалить"
                style={{ ...styles.btn, ...styles.btnDelete }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: 600,
                    color: colors.white,
                    fontSize: 14,
                  }}
                >
                  Удалить{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </FadeInView>
      ) : null}
    </View>
  );
}

export default UserCard;
