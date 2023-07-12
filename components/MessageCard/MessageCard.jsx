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
import axios from "axios";
import server from "../../constants/server";
import { useStoreActions } from "easy-peasy";

function MessageCard(props) {
  const [isIconPressed, setIsIconPressed] = useState(false);
  const { email, name, message, phoneNumber, read, id } = props;
  const [isRead, setIsRead] = useState(read);

  const setRefresh = useStoreActions(
    (actions) => actions.messagesModel.setIsMessagesRefresh
  );

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileInitials}>U</Text>
        </View>
        <View style={styles.nameMessage}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>

        {!isRead ? <View style={styles.notif}></View> : null}
      </View>
      <View style={isIconPressed ? styles.arrowUp : styles.arrowDown}>
        <TouchableOpacity
          onPress={async () => {
            setIsIconPressed(!isIconPressed);
            if (read) {
              return;
            }
            setRefresh(true);
            await axios
              .patch(`http://${server}:5005/api/message/read/${id}`, {
                read: true,
              })
              .then((res) => {});
            setIsRead(true);
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
            <Text style={styles.infoText}>+{phoneNumber}</Text>
          </View>
          <View style={styles.info}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <Text style={styles.infoText}>{email}</Text>
          </View>
          <View style={styles.info}>
            <AntDesign name="message1" size={24} color="black" />
            <Text style={styles.infoText}>{message}</Text>
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
            <TouchableOpacity
              style={{ ...styles.btn, ...styles.btnDelete }}
              onPress={async () => {
                setRefresh(true);
                await axios
                  .delete(`http://${server}:5005/api/message/${id}`)
                  .then((res) => {
                    console.log(res);
                  });
              }}
            >
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
