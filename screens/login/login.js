import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  Feather,
  Foundation,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import styles from "./login.styles";
import logo from "../../assets/images/logoNew.png";
import server from "../../constants/server";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStoreActions } from "easy-peasy";
import Users from "../users/users";
import AddUser from "../addUser/addUser";
import Wallpapers from "../wallpapers/wallpapers";
import Services from "../services/services";
import Analytics from "../analytics/analytics";
import Orders from "../orders/orders";
import Messages from "../messages/messages";
import Settings from "../settings/settings";
import Other from "../userScreens/other/other";
import ServiceList from "../userScreens/serviceList/serviceList";
import { createStackNavigator } from "@react-navigation/stack";

const UserStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const adminTabs = [
  {
    name: "Пользователи",
    component: UserScreen,
    tabBarIcon: ({ color, size }) => (
      <Feather name="user" size={size} color={color} />
    ),
  },
  {
    name: "Аналитика",
    component: Analytics,
    tabBarIcon: ({ color, size }) => (
      <Foundation name="graph-pie" size={size} color={color} />
    ),
  },
  {
    name: "Заявки",
    component: Orders,
    tabBarIcon: ({ color, size }) => (
      <Feather name="inbox" size={size} color={color} />
    ),
  },
  {
    name: "Сообщения",
    component: Messages,
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons
        name="message-reply-text-outline"
        size={size}
        color={color}
      />
    ),
  },
  {
    name: "Настройки",
    component: SettingsScreen,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="settings-outline" size={size} color={color} />
    ),
  },
];

const userTabs = [
  {
    name: "Услуги",
    component: ServiceList,
    tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="playlist-add-check" size={size} color={color} />
    ),
  },
  {
    name: "Прочее",
    component: Other,
    tabBarIcon: ({ color, size }) => (
      <Entypo name="dots-three-horizontal" size={size} color={color} />
    ),
  },
];

function UserScreen() {
  return (
    <UserStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        headerShown: false,
      }}
      initialRouteName="Пользователи"
    >
      <UserStack.Screen name="UserStackScreen" component={Users} />
      <UserStack.Screen name="AddUser" component={AddUser} />
    </UserStack.Navigator>
  );
}

function SettingsScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        headerShown: false,
      }}
      initialRouteName="Настройки"
    >
      <SettingsStack.Screen name="SettingsScreen" component={Settings} />
      <SettingsStack.Screen name="Services" component={Services} />
      <SettingsStack.Screen name="Wallpapers" component={Wallpapers} />
    </SettingsStack.Navigator>
  );
}

function Login({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const endPoint = `http://${
    Platform.OS === "android" ? server : "localhost"
  }:5005/api/user/login`;

  const setIsLoggedIn = useStoreActions(
    (actions) => actions.loginModel.setIsLoggedIn
  );
  const setTabs = useStoreActions((actions) => actions.loginModel.setTabs);

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
                if (res.data.user === "admin") {
                  setTabs(adminTabs);
                } else {
                  setTabs(userTabs);
                }
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
