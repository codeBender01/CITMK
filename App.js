import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  Foundation,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { colors } from "./constants/theme";
import Users from "./screens/users/users";
import Analytics from "./screens/analytics/analytics";
import Orders from "./screens/orders/orders";
import Messages from "./screens/messages/messages";
import Settings from "./screens/settings/settings";
import { ImageBackground } from "react-native";
import { DefaultTheme } from "@react-navigation/native";

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
    component: Users,
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

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/squid.jpg")}
      resizeMode="stretch"
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: colors.navbarBg,
              flexDirection: "column",
              height: 50,
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "#fff",
          }}
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
  );
}
