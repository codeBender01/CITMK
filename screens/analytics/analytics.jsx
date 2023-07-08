import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import styles from "./analytics.styles";
import { DatePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { colors } from "../../constants/theme";

const analyticsList = [
  {
    anIcon: <FontAwesome name="building-o" size={24} color={colors.white} />,
    anTitle: "Всего Организаций",
    anData: "10",
  },
  {
    anIcon: <Feather name="trending-up" size={24} color={colors.white} />,
    anTitle: "Всего Заявок",
    anData: "10",
  },
  {
    anIcon: <Feather name="trending-up" size={24} color={colors.white} />,
    anTitle: "Заявки за выбранный период",
    anData: "10",
  },
  {
    anIcon: null,
    anTitle: "Организации",
    anData: "",
  },
];

function Analytics() {
  const [range, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [open, setOpen] = useState(false);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );

  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={styles.datePickButton}
        >
          <Text style={styles.datePickText}>Выбрать дату</Text>
        </TouchableOpacity>
        <DatePickerModal
          locale="tm"
          mode="range"
          visible={open}
          onDismiss={onDismiss}
          startDate={range.startDate}
          endDate={range.endDate}
          onConfirm={onConfirm}
        />
      </View>

      {analyticsList.map((anBox) => {
        return (
          <View style={styles.analyticsBox} key={anBox.anTitle}>
            <View style={styles.anTitle}>
              {anBox.anIcon}
              <Text style={styles.anBoxText}>{anBox.anTitle}</Text>
            </View>
            <View style={styles.anTitle}>
              <Text style={styles.anBoxText}>{anBox.anData}</Text>
            </View>
          </View>
        );
      })}

      <View style={styles.analyticsBox}>
        <Text style={styles.anBoxText}>Разделы</Text>
        <View style={styles.tableRow}>
          <Text style={styles.tableRowTitleText}>Заправка</Text>
          <Text style={styles.tableRowDataText}>0</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableRowTitleText}>Ремонт</Text>
          <Text style={styles.tableRowDataText}>0</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableRowTitleText}>Диагностика</Text>
          <Text style={styles.tableRowDataText}>0</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableRowTitleText}>Другое</Text>
          <Text style={styles.tableRowDataText}>0</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Analytics;
