import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./orderCard.styles";
import { colors } from "../../constants/theme";
import FadeInView from "../../animations/FadeInView";
import axios from "axios";
import server from "../../constants/server";
import { useStoreActions } from "easy-peasy";

function OrderCard({ order, status, statusColor, buttonText, url }) {
  const [isIconPressed, setIsIconPressed] = useState(false);
  const [isInProcess, setIsInProcess] = useState(false);

  const setRefresh = useStoreActions(
    (actions) => actions.ordersModel.setIsOrderRefresh
  );

  useEffect(() => {
    if (status === "Новая") {
      setIsInProcess(true);
    } else if (status === "В процессе") {
      setIsInProcess(false);
    }
  }, [status]);

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
              <TouchableOpacity
                style={{ ...styles.btn, ...styles.btnEdit }}
                onPress={async () => {
                  setRefresh(true);
                  await axios
                    .post(
                      isInProcess
                        ? `http://${server}:5005/api/service/accepted/${order.item._id}`
                        : `http://${server}:5005/api/service/done/${order.item._id}`,
                      {
                        description: order.item.description,
                        Options: order.item.Options,
                        userName: order.item.userName,
                        Organization: order.item.Organization,
                        comments: "",
                      }
                    )
                    .then(async (res) => {
                      await axios
                        .delete(
                          isInProcess
                            ? `http://${server}:5005/api/service/sended/${order.item._id}`
                            : `http://${server}:5005/api/service/accepted/${order.item._id}`
                        )
                        .then(() => {
                          setRefresh(false);
                        })

                        .catch((error) => {
                          console.log(error);
                        });
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
                  {buttonText[0]}
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{ ...styles.btn, ...styles.btnDelete }}
              onPress={async () => {
                setRefresh(true);
                await axios.delete(`${url}/${order.item._id}`).then((res) => {
                  console.log(res.data);
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
