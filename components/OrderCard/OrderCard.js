import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./orderCard.styles";
import { colors } from "../../constants/theme";
import FadeInView from "../../animations/FadeInView";

function OrderCard({ order, status, statusColor, buttonText }) {
  const [isIconPressed, setIsIconPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.orgName,

          textTransform: "uppercase",
        }}
      >
        {order.item.Organization}
      </Text>

      <View style={{ ...styles.orderLabel, backgroundColor: statusColor }}>
        <Text style={styles.orderLabelText}>{status}</Text>
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
            <Text>{order.item.Options}</Text>
          </View>
          <View>
            <Text>{order.item.description}</Text>
          </View>
          <View style={styles.actionBtns}>
            {buttonText[0] === "" ? null : (
              <TouchableOpacity style={{ ...styles.btn, ...styles.btnEdit }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: 600,
                    color: colors.white,
                    fontSize: 14,
                  }}
                >
                  {buttonText[0]}
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={{ ...styles.btn, ...styles.btnDelete }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: 600,
                  color: colors.white,
                  fontSize: 14,
                }}
              >
                {buttonText[1]}
              </Text>
            </TouchableOpacity>
          </View>
        </FadeInView>
      ) : null}
    </View>
  );
}

export default OrderCard;
