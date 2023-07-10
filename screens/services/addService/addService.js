import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import styles from "./addSer.styles";
import {
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { colors } from "../../../constants/theme";
import server from "../../../constants/server";
import axios from "axios";
import { Snackbar } from "react-native-paper";
import { useStoreActions } from "easy-peasy";

const services = [
  {
    name: "Заправка",
    icon: <FontAwesome5 name="fill" size={24} color="black" />,
  },
  {
    name: "Ремонт",
    icon: <MaterialIcons name="home-repair-service" size={24} color="black" />,
  },
  {
    name: "Диагностика",
    icon: <FontAwesome5 name="diagnoses" size={24} color="black" />,
  },
  {
    name: "Другое",
    icon: <Entypo name="dots-three-horizontal" size={24} color="black" />,
    last: true,
  },
];

function AddService({ navigation }) {
  const [isPickerPressed, setIsPickerPressed] = useState(false);
  const [service, setService] = useState("");
  const [desc, setDesc] = useState("");
  const [snackVisible, setSnackVisible] = useState(false);
  const [snackText, setSnackText] = useState("");

  const setRefresh = useStoreActions(
    (actions) => actions.servicesModel.setServicesRefresh
  );

  const submitUrl = `http://${
    Platform.OS === "android" ? server : "localhost"
  }:5005/api/service`;

  const handleSubmit = async () => {
    if (desc === "" || service === "") {
      setSnackVisible(true);
      setSnackText("Данные не заполнены");
      return;
    }
    const services = {
      description: desc,
      Options: service,
      comments: "",
    };

    await axios
      .post(submitUrl, services)
      .then((res) => {
        setRefresh(true);
        setService("");
        setDesc("");
        setSnackVisible(true);
        setSnackText("Услуга успешно добавлена");
        navigation.navigate("SettingsScreen");
      })
      .catch((err) => {
        setSnackVisible(true);
        setSnackText("Ошибка! Попробуйте снова");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Создать Заявку</Text>
      <View style={styles.form}>
        <View style={styles.input}>
          <TextInput
            placeholder="Описание услуги"
            inputMode="text"
            style={{
              ...styles.textInput,
              borderWidth: 1,
              borderColor: colors.grayFinished,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
            onFocus={() => setIsPickerPressed(false)}
            onChange={({ nativeEvent }) => setDesc(nativeEvent.text)}
            value={desc}
          />
        </View>
        <View style={{ ...styles.dropdown }}>
          <Text style={styles.label}>Тип услуги</Text>
          <View style={styles.picker}>
            <TouchableOpacity
              onPress={() => {
                setIsPickerPressed(!isPickerPressed);
              }}
              activeOpacity={1}
              style={styles.pickerBtn}
            >
              <TextInput
                editable={false}
                style={styles.textInput}
                value={service}
                showSoftInputOnFocus={false}
              />
              <FontAwesome name="caret-down" size={24} color="#868686" />
            </TouchableOpacity>
          </View>
          {isPickerPressed ? (
            <View
              style={
                Platform.OS === "ios" ? styles.iosSelect : styles.androidSelect
              }
            >
              {services.map((ser) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setService(ser.name);
                      setIsPickerPressed(false);
                    }}
                    key={ser.name}
                    style={ser.last ? styles.last : styles.select}
                  >
                    {ser.icon}
                    <Text style={styles.option}>{ser.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.actionBtns}>
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Сохранить</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <Text style={styles.btnText}>Отменить</Text>
        </TouchableOpacity>
      </View>
      <Snackbar
        visible={snackVisible}
        duration={2000}
        onDismiss={() => {
          setSnackVisible(false);
        }}
        wrapperStyle={{
          bottom: 0,
          left: 0,
        }}
        style={{
          backgroundColor: colors.navbarBg,
        }}
      >
        {snackText}
      </Snackbar>
    </View>
  );
}

export default AddService;
