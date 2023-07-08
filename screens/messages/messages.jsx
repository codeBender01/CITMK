import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./messages.styles";
import MessageCard from "../../components/MessageCard/MessageCard";
import useFetch from "../../hooks/useFetch";
import NoData from "../../components/NoData/NoData";
import { colors } from "../../constants/theme";

function Messages() {
  const { data, error, refetch } = useFetch("message");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color={colors.navbarBg} size="small" />}
      {data.messages && data.messages.length > 0 ? (
        data.messages.map((msg) => {
          return <MessageCard />;
        })
      ) : isLoading ? null : (
        <NoData text={"В письмах пусто"} />
      )}
    </View>
  );
}

export default Messages;
