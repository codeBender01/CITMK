import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import OrderCard from "../../components/OrderCard/OrderCard";
import styles from "./orders.styles";

const orderTabs = ["Новые заявки", "В работе", "Выполненные"];

function Orders() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.orderTabs}>
        {orderTabs.map((tab, index) => {
          return (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === index ? styles.activeTab : null,
              ]}
              onPress={() => setActiveTab(index)}
            >
              <Text numberOfLines={1}>{tab}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <FlatList data={[1]} renderItem={() => <OrderCard />} />
    </View>
  );
}

export default Orders;
