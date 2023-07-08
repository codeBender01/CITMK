import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "./login.styles";
import logo from "../../assets/images/logoNew.png";
import server from "../../constants/server";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStoreActions } from "easy-peasy";

function Login({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const endPoint = `http://${
    Platform.OS === "android" ? server : "localhost"
  }:5005/api/user/login`;

  const setIsLoggedIn = useStoreActions(
    (actions) => actions.loginModel.setIsLoggedIn
  );

  const setRole = useStoreActions((actions) => actions.loginModel.setRole);

  return (
    <View style={styles.container}>
      <Image source={logo} alt="Logo" resizeMode="cover" />
      <View style={styles.loginField}>
        <Text style={styles.text}>Введите данные</Text>
        <View style={styles.inputField}>
          <Text style={styles.inputText}>Имя пользователя</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChange={({ nativeEvent }) => setName(nativeEvent.text)}
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.inputText}>Пароль</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChange={({ nativeEvent }) => setPassword(nativeEvent.text)}
          />
        </View>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={async () => {
            const data = JSON.stringify({ name, password });
            await axios
              .post(endPoint, data, {
                headers: { "Content-Type": "application/json" },
              })
              .then(async (res) => {
                setIsLoggedIn(true);
                await AsyncStorage.setItem("token", res.data.token);
                setRole(res.data.role);
              })
              .catch((err) => {
                console.log(err.message);
              });
          }}
        >
          <Text style={styles.submitBtnText}>Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
