import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
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
import AddService from "../services/addService/addService";
import Analytics from "../analytics/analytics";
import Orders from "../orders/orders";
import Messages from "../messages/messages";
import Settings from "../settings/settings";
import Other from "../userScreens/other/other";
import ServiceList from "../userScreens/serviceList/serviceList";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../../constants/theme";
import { Snackbar } from "react-native-paper";

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
    tabBarBadge: true,
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
      <SettingsStack.Screen name="AddService" component={AddService} />
    </SettingsStack.Navigator>
  );
}

function Login({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);

  const endPoint = `http://${server}:5005/api/user/login`;

  const setIsLoggedIn = useStoreActions(
    (actions) => actions.loginModel.setIsLoggedIn
  );
  const setTabs = useStoreActions((actions) => actions.loginModel.setTabs);

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        alt="Logo"
        resizeMode="contain"
        style={{ width: "75%", height: 80 }}
      />
      <View style={styles.loginField}>
        <Text style={styles.text}>Введите данные</Text>
        <View style={styles.inputField}>
          <Text style={styles.inputText}>Имя пользователя</Text>
          <TextInput
            style={isError ? styles.loginError : styles.input}
            value={name}
            onChange={({ nativeEvent }) => {
              setName(nativeEvent.text);
              setIsError(false);
            }}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.inputText}>Пароль</Text>
          <TextInput
            style={isError ? styles.loginError : styles.input}
            secureTextEntry={true}
            value={password}
            onChange={({ nativeEvent }) => {
              setPassword(nativeEvent.text);
              setIsError(false);
            }}
            autoCapitalize="none"
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
                await AsyncStorage.setItem(
                  "user",
                  JSON.stringify(res.data.user)
                );
                if (res.data.user.role === "admin") {
                  setTabs(adminTabs);
                } else {
                  setTabs(userTabs);
                }
              })
              .catch((err) => {
                setSnackVisible(true);
                setIsError(true);
                setName("");
                setPassword("");
              });
          }}
        >
          <Text style={styles.submitBtnText}>Войти</Text>
        </TouchableOpacity>
      </View>
      <Snackbar
        visible={snackVisible}
        duration={2000}
        onDismiss={() => {
          setSnackVisible(false);
        }}
        wrapperStyle={{
          top: "25%",
          left: 20,
        }}
        style={{
          backgroundColor: colors.redDelete,
        }}
      >
        Данные введены неправильно
      </Snackbar>
    </View>
  );
}

export default Login;
