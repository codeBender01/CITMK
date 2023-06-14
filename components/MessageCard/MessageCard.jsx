import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./messageCard.styles";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { colors } from "../../constants/theme";
import FadeInView from "../../animations/FadeInView";

function MessageCard() {
  const [isIconPressed, setIsIconPressed] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileInitials}>U</Text>
        </View>
        <View style={styles.nameMessage}>
          <Text style={styles.name}>user</Text>
          <Text style={styles.message}>message</Text>
        </View>
      </View>
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
          <View style={styles.info}>
            <Feather name="phone-call" size={24} color="black" />
            <Text style={styles.infoText}>+99353562365</Text>
          </View>
          <View style={styles.info}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <Text style={styles.infoText}>condom@gmail.com</Text>
          </View>
          <View style={styles.info}>
            <AntDesign name="message1" size={24} color="black" />
            <Text style={styles.infoText}>hfshdgfhgsfs</Text>
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
                Редактировать
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.btn, ...styles.btnDelete }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: 600,
                  color: colors.white,
                  fontSize: 14,
                }}
              >
                Удалить
              </Text>
            </TouchableOpacity>
          </View>
        </FadeInView>
      ) : null}
    </View>
  );
}

export default MessageCard;
