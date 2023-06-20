import React from "react";
import { View, Text } from "react-native";
import styles from "./nodata.styles";

function NoData({ text }) {
  return (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataText}>{text}</Text>
    </View>
  );
}

export default NoData;
