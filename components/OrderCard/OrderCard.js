import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./orderCard.styles";
import { colors } from "../../constants/theme";
import FadeInView from "../../animations/FadeInView";

function OrderCard() {
  const [isIconPressed, setIsIconPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.orgName,

          textTransform: "uppercase",
        }}
      >
        Название организации
      </Text>

      <View style={styles.orderLabel}>
        <Text style={styles.orderLabelText}>Выполнено</Text>
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
          <View>
            <Text>Описание задачи</Text>
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
                Принять
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
                Отказаться
              </Text>
            </TouchableOpacity>
          </View>
        </FadeInView>
      ) : null}
    </View>
  );
}

export default OrderCard;
