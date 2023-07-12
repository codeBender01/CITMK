import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "./constants/theme";

import Login from "./screens/login/login";
import { ImageBackground, SafeAreaView } from "react-native";
import { DefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { useStoreActions, useStoreState } from "easy-peasy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import server from "./constants/server";
import img from "./assets/images/bg1.jpg";

const LoginStack = createStackNavigator();

const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

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

export default function App() {
  const [loaded] = useFonts({
    InterReg: require("./assets/fonts/Inter-Regular.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterMed: require("./assets/fonts/Inter-Medium.ttf"),
  });
  const [bgImage, setBgImage] = useState(null);
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);
  const isLoggedIn = useStoreState((state) => state.loginModel.isLoggedIn);
  const tabs = useStoreState((state) => state.loginModel.tabs);
  const refresh = useStoreState(
    (state) => state.messagesModel.isMessagesRefresh
  );

  const getData = async () => {
    const res = await AsyncStorage.getItem("imagePath");
    setBgImage(JSON.parse(res));
  };

  const setTheImage = async () => {
    const res = await AsyncStorage.getItem("imagePath");
    if (res) {
      return;
    }
    await AsyncStorage.setItem("imagePath", JSON.stringify(img));
  };

  const fetchMessages = async () => {
    await axios.get(`http://${server}:5005/api/message/read`).then((res) => {
      setUnreadMessageCount(res.data.result);
    });
  };

  useEffect(() => {
    fetchMessages();
    getData();
    setTheImage();
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [refresh]);

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
          {isLoggedIn && tabs.length > 0 ? (
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
                      tabBarBadge: tab.tabBarBadge ? unreadMessageCount : null,
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
