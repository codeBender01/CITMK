import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  Foundation,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { colors } from "./constants/theme";
import Users from "./screens/users/users";
import AddUser from "./screens/AddUser/addUser";
import Analytics from "./screens/analytics/analytics";
import Orders from "./screens/orders/orders";
import Messages from "./screens/messages/messages";
import Settings from "./screens/settings/settings";
import { ImageBackground, SafeAreaView } from "react-native";
import { DefaultTheme } from "@react-navigation/native";
import img from "./assets/images/bg1.jpg";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const UserStack = createStackNavigator();

SplashScreen.preventAutoHideAsync();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const tabs = [
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
    component: Settings,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="settings-outline" size={size} color={color} />
    ),
  },
];

const Tab = createBottomTabNavigator();

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

export default function App() {
  const [loaded] = useFonts({
    InterReg: require("./assets/fonts/Inter-Regular.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterMed: require("./assets/fonts/Inter-Medium.ttf"),
  });

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
        source={img}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
        onLayout={onLayoutRootView}
        transition={false}
      >
        <NavigationContainer theme={MyTheme}>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                backgroundColor: colors.navbarBg,
                paddingHorizontal: 10,
                height: 60,
              },
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "#fff",
              gestureEnabled: true,
            }}
            initialRouteName="Заявки"
          >
            {tabs.map((tab) => {
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
        </NavigationContainer>
      </ImageBackground>
    </SafeAreaView>
  );
}
