import { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import styles from "./other.styles";
import PhoneInput from "react-native-phone-input";
import axios from "axios";
import server from "../../../constants/server";

function Other() {
  const phone = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrg] = useState("");
  const [department, setDepartment] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  const handleSubmit = async () => {
    const credentials = {
      organization,
      email,
      department,
      number: number.slice(1).replace(/\s/g, ""),
      name,
      description,
    };
    console.log(credentials);

    await axios
      .post(
        `http://${
          Platform.OS === "android" ? server : "localhost"
        }:5005/api/message`,
        credentials
      )
      .then((res) => {
        console.log(res.data);
      });
    await axios.post(
      `http://${
        Platform.OS === "ios" ? "localhost" : server
      }:5005/api/mail/message`,
      credentials
    );

    ("");
    setDepartment("");
    setOrg("");
    setEmail("");
    setNumber("");
    setDescription("");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.bigText}>Отправить заявку</Text>
        <Text style={styles.desc}>
          Введите свои контактные данные и кратко опишите свою проблему.
        </Text>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <View style={styles.form}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Имя</Text>
              <TextInput
                inputMode="text"
                style={styles.input}
                value={name}
                onChange={({ nativeEvent }) => setName(nativeEvent.text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                inputMode="email"
                style={styles.input}
                value={email}
                onChange={({ nativeEvent }) => setEmail(nativeEvent.text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Организация</Text>
              <TextInput
                inputMode="text"
                style={styles.input}
                value={organization}
                onChange={({ nativeEvent }) => setOrg(nativeEvent.text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Отдел</Text>
              <TextInput
                inputMode="text"
                style={styles.input}
                value={department}
                onChange={({ nativeEvent }) => setDepartment(nativeEvent.text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Телефонный номер</Text>
              <PhoneInput
                ref={phone}
                style={styles.input}
                initialCountry={"tm"}
                autoFormat={true}
                textProps={{
                  maxLength: 14,
                }}
                onChangePhoneNumber={(value) => setNumber(value)}
                initialValue={number}
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
              />
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.btnText}>Отправить</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

export default Other;
