import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Paltform,
} from "react-native";
import OrderCard from "../../components/OrderCard/OrderCard";
import styles from "./orders.styles";
import { colors } from "../../constants/theme";
import axios from "axios";
import NoData from "../../components/NoData/NoData";
import server from "../../constants/server";
import { useStoreActions, useStoreState } from "easy-peasy";

const orderTabs = ["Новые заявки", "В работе", "Выполненные"];

function Orders() {
  const [activeTab, setActiveTab] = useState("Новые заявки");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("Новая");
  const [statusColor, setStatusColor] = useState(colors.greenAccept);
  const [buttonText, setButtonText] = useState(["Принять", "Отказаться"]);
  const [url, setUrl] = useState(`http://${server}:5005/api/service/sended`);
  const [sent, setSent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const refresh = useStoreState((state) => state.ordersModel.isOrdersRefresh);

  const setRefresh = useStoreActions(
    (actions) => actions.ordersModel.setIsOrderRefresh
  );

  useEffect(() => {
    const fetchAllOrders = async () => {
      setIsLoading(true);
      await axios
        .get(`http://${server}:5005/api/service/sended/all`)
        .then((res) => {
          setSent(res.data.services);
          setData(res.data.services);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchAllOrders();
  }, []);

  useEffect(() => {
    if (refresh) {
      setTimeout(() => {
        setRefresh(false);
      }, 2000);
    }
  }, [refresh]);

  return (
    <View style={styles.container}>
      <View style={styles.orderTabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Новые заявки" ? styles.activeTab : null,
          ]}
          onPress={() => {
            setData(sent);
            setUrl(`http://${server}:5005/api/service/sended`);
            setActiveTab("Новые заявки");
            setStatusColor(colors.greenAccept);
            setStatus("Новая");
            setButtonText(["Принять", "Отказаться"]);
          }}
        >
          <Text numberOfLines={1}>Новые заявки</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "В работе" ? styles.activeTab : null,
          ]}
          onPress={async () => {
            await axios
              .get(`http://${server}:5005/api/service/accepted/get`)
              .then((res) => {
                setData(res.data.acceptedServices);
              })
              .catch((err) => {
                console.log(err.message);
              });

            setUrl(`http://${server}:5005/api/service/accepted`);
            setActiveTab("В работе");
            setStatusColor(colors.yellowProcess);
            setStatus("В процессе");
            setButtonText(["Готово", "Удалить"]);
          }}
        >
          <Text numberOfLines={1}>В работе</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Выполненные" ? styles.activeTab : null,
          ]}
          onPress={async () => {
            await axios
              .get(`http://${server}:5005/api/service/done/get`)
              .then((res) => {
                setData(res.data.serviceDone);
              })
              .catch((err) => {
                console.log(err.message);
              });
            setUrl(`http://${server}:5005/api/service/done`);
            setActiveTab("Выполненные");
            setStatusColor(colors.grayFinished);
            setStatus("Выполнено");
            setButtonText(["", "Удалить"]);
          }}
        >
          <Text numberOfLines={1}>Выполненные</Text>
        </TouchableOpacity>
      </View>

      {isLoading || refresh ? (
        <ActivityIndicator size="large" color={colors.navbarBg} />
      ) : (
        <FlatList
          data={data}
          renderItem={(d) => (
            <OrderCard
              order={d}
              status={status}
              statusColor={statusColor}
              buttonText={buttonText}
              url={url}
            />
          )}
        />
      )}
    </View>
  );
}

export default Orders;
