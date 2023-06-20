import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import OrderCard from "../../components/OrderCard/OrderCard";
import styles from "./orders.styles";
import { useStoreState, useStoreActions } from "easy-peasy";
import useFetch from "../../hooks/useFetch";
import { colors } from "../../constants/theme";
import axios from "axios";
import NoData from "../../components/NoData/NoData";

const orderTabs = ["Новые заявки", "В работе", "Выполненные"];

const endpoints = [
  "http://192.168.1.20:5005/api/service/sended/all",
  "http://192.168.1.20:5005/api/service/accepted/get",
  "http://192.168.1.20:5005/api/service/done/get",
];

function Orders() {
  const [activeTab, setActiveTab] = useState("Новые заявки");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("Новая");
  const [statusColor, setStatusColor] = useState(colors.greenAccept);
  const [buttonText, setButtonText] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [done, setDone] = useState([]);
  const [sent, setSent] = useState([]);
  const [isThereData, setIsThereData] = useState(true);

  useEffect(() => {
    const fetchAllOrders = async () => {
      await axios
        .get("http://localhost:5005/api/service/sended/all")
        .then((res) => {
          setSent(res.data.services);
        })
        .catch((err) => {
          console.log(err.message);
        });

      await axios
        .get("http://localhost:5005/api/service/accepted/get")
        .then((res) => {
          setAccepted(res.data.acceptedServices);
        })
        .catch((err) => {
          console.log(err.message);
        });

      await axios
        .get("http://localhost:5005/api/service/done/get")
        .then((res) => {
          setDone(res.data.serviceDone);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchAllOrders();
    if (sent.length === 0 || data.length === 0) {
      setTimeout(() => {
        setIsThereData(false);
      }, 3000);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.orderTabs}>
        {orderTabs.map((tab) => {
          return (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab ? styles.activeTab : null]}
              onPress={() => {
                if (tab === "Новые заявки") {
                  setData(sent);
                  setActiveTab(tab);
                  setStatusColor(colors.greenAccept);
                  setStatus("Новая");
                  setButtonText(["Принять", "Отказаться"]);
                } else if (tab === "В работе") {
                  setData(accepted);
                  setActiveTab(tab);
                  setStatusColor(colors.yellowProcess);
                  setStatus("В процессе");
                  setButtonText(["Готово", "Удалить"]);
                } else {
                  setData(done);
                  setActiveTab(tab);
                  setStatusColor(colors.grayFinished);
                  setStatus("Выполнено");
                  setButtonText(["", "Удалить"]);
                }
              }}
            >
              <Text numberOfLines={1}>{tab}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {!isThereData ? (
        <NoData text={"В заяках пусто"} />
      ) : (
        <>
          {isThereData ? (
            <ActivityIndicator
              color={colors.navbarBg}
              style={styles.indicator}
              size="large"
            />
          ) : null}

          <FlatList
            data={data.length === 0 ? sent : data}
            renderItem={(d) => (
              <OrderCard
                order={d}
                status={status}
                statusColor={statusColor}
                buttonText={buttonText}
              />
            )}
          />
        </>
      )}
    </View>
  );
}

export default Orders;
