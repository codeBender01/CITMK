import { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import styles from "./other.styles";
import PhoneInput from "react-native-phone-input";
import axios from "axios";
import server from "../../../constants/server";
import { useStoreActions } from "easy-peasy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Snackbar } from "react-native-paper";
import { colors } from "../../../constants/theme";

function Other() {
  const phone = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrg] = useState("");
  const [department, setDepartment] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [snackVisible, setSnackVisible] = useState(false);

  const setIsloggedIn = useStoreActions(
    (actions) => actions.loginModel.setIsLoggedIn
  );
  const setTabs = useStoreActions((actions) => actions.loginModel.setTabs);

  const handleSubmit = async () => {
    const credentials = {
      organization,
      email,
      department,
      number: number.slice(1).replace(/\s/g, ""),
      name,
      description,
    };

    await axios
      .post(
        `http://${
          Platform.OS === "android" ? server : "localhost"
        }:5005/api/message`,
        credentials
      )
      .then((res) => {
        setSnackVisible(true);
        setName("");
        setDepartment("");
        setOrg("");
        setEmail("");
        setNumber("");
        setDescription("");
      });
    await axios.post(`http://${server}:5005/api/mail/message`, credentials);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.bigText}>Отправить заявку</Text>
        <Text style={styles.desc}>
          Введите свои контактные данные и кратко опишите свою проблему.
        </Text>

        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Имя</Text>
            <TextInput
              inputMode="text"
              style={styles.input}
              value={name}
              onChange={({ nativeEvent }) => setName(nativeEvent.text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              inputMode="email"
              style={styles.input}
              value={email}
              onChange={({ nativeEvent }) => setEmail(nativeEvent.text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Организация</Text>
            <TextInput
              inputMode="text"
              style={styles.input}
              value={organization}
              onChange={({ nativeEvent }) => setOrg(nativeEvent.text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Отдел</Text>
            <TextInput
              inputMode="text"
              style={styles.input}
              value={department}
              onChange={({ nativeEvent }) => setDepartment(nativeEvent.text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Телефонный номер</Text>
            <PhoneInput
              style={styles.input}
              initialCountry={"tm"}
              autoFormat={true}
              textProps={{
                maxLength: 14,
              }}
              onChangePhoneNumber={(value) => setNumber(value)}
              setValue={number}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Сообщение</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              inputMode="text"
              style={{ ...styles.input }}
              value={description}
              onChange={({ nativeEvent }) => setDescription(nativeEvent.text)}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Отправить</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.logout}
        onPress={async () => {
          await AsyncStorage.removeItem("token");
          setIsloggedIn(false);
          setTabs([]);
        }}
      >
        <Text style={styles.logoutText}>Выйти</Text>
      </TouchableOpacity>
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
        Сообщение отправлено!
      </Snackbar>
    </ScrollView>
  );
}

export default Other;
