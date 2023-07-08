import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  Foundation,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { colors } from "./constants/theme";
import Users from "./screens/users/users";
import AddUser from "./screens/addUser/addUser";
import Wallpapers from "./screens/wallpapers/wallpapers";
import Services from "./screens/services/services";
import Analytics from "./screens/analytics/analytics";
import Orders from "./screens/orders/orders";
import Messages from "./screens/messages/messages";
import Settings from "./screens/settings/settings";
import Login from "./screens/login/login";
import Other from "./screens/userScreens/other/other";
import ServiceList from "./screens/userScreens/serviceList/serviceList";
import { ImageBackground, SafeAreaView } from "react-native";
import { DefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { useStoreState } from "easy-peasy";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginStack = createStackNavigator();
const UserStack = createStackNavigator();
const SettingsStack = createStackNavigator();

SplashScreen.preventAutoHideAsync();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

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

const Tab = createBottomTabNavigator();

function LoginScreen() {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Войти"
    >
      <LoginStack.Screen name="login">{() => <Login />}</LoginStack.Screen>
    </LoginStack.Navigator>
  );
}

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

export default function App() {
  const [loaded] = useFonts({
    InterReg: require("./assets/fonts/Inter-Regular.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterMed: require("./assets/fonts/Inter-Medium.ttf"),
  });
  const [bgImage, setBgImage] = useState(null);
  const isLoggedIn = useStoreState((state) => state.loginModel.isLoggedIn);
  const role = useStoreState((state) => state.loginModel.role);

  const getData = async () => {
    const res = await AsyncStorage.getItem("imagePath");
    setBgImage(JSON.parse(res));
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const wallInt = setInterval(() => {
      getData();
    }, 2000);

    return () => {
      clearInterval(wallInt);
    };
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
        onLayout={onLayoutRootView}
        transition={false}
      >
        <NavigationContainer theme={MyTheme}>
          {isLoggedIn ? (
            <Tab.Navigator
              screenOptions={{
                tabBarStyle: {
                  backgroundColor: colors.navbarBg,
                  paddingHorizontal: 10,
                  height: 60,
                },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#fff",
                gestureEnabled: true,
              }}
              initialRouteName={role === "admin" ? "Заявки" : "Услуги"}
            >
              {role === "admin"
                ? adminTabs.map((tab) => {
                    return (
                      <Tab.Screen
                        key={tab.name}
                        name={tab.name}
                        component={tab.component}
                        options={{
                          tabBarIcon: tab.tabBarIcon,
                          headerShown: false,
                          tabBarActiveBackgroundColor: "rgba(0, 0, 0, 0.4)",
                          tabBarItemStyle: {
                            paddingVertical: 5,
                          },
                        }}
                      />
                    );
                  })
                : userTabs.map((tab) => {
                    return (
                      <Tab.Screen
                        key={tab.name}
                        name={tab.name}
                        component={tab.component}
                        options={{
                          tabBarIcon: tab.tabBarIcon,
                          headerShown: false,
                          tabBarActiveBackgroundColor: "rgba(0, 0, 0, 0.4)",
                          tabBarItemStyle: {
                            paddingVertical: 5,
                          },
                        }}
                      />
                    );
                  })}
            </Tab.Navigator>
          ) : (
            <LoginScreen />
          )}
        </NavigationContainer>
      </ImageBackground>
    </SafeAreaView>
  );
}
