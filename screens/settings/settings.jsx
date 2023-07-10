import { View, Text, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import styles from "./settings.styles";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStoreActions } from "easy-peasy";

function Settings({ navigation }) {
  const setIsloggedIn = useStoreActions(
    (actions) => actions.loginModel.setIsLoggedIn
  );
  const setTabs = useStoreActions((actions) => actions.loginModel.setTabs);
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <View style={styles.initials}>
          <Text style={styles.initialsText}>AB</Text>
        </View>
        <Text style={styles.username}>Admin</Text>
        <Text style={styles.email}>admin@gmail.com</Text>
      </View>
      <View style={styles.settingBars}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Services");
          }}
        >
          <View style={styles.settingBar}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons
                  name="format-list-checks"
                  size={24}
                  color="#fff"
                />
              </View>
              <View>
                <Text style={styles.settingName}>Список услуг</Text>
                <Text style={styles.settingActionText}>
                  Редактировать услуги
                </Text>
              </View>
            </View>
            <Ionicons name="arrow-forward" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Wallpapers");
          }}
        >
          <View style={{ ...styles.settingBar }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <View style={styles.settingIcon}>
                <MaterialIcons name="now-wallpaper" size={24} color="#fff" />
              </View>
              <View>
                <Text style={styles.settingName}>Обои</Text>
                <Text style={styles.settingActionText}>Выбрать обои</Text>
              </View>
            </View>
            <Ionicons name="arrow-forward" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem("token");
            setIsloggedIn(false);
            setTabs([]);
          }}
        >
          <View style={{ ...styles.settingBar, ...styles.settingBarNoBorder }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <View style={styles.settingIcon}>
                <MaterialCommunityIcons name="logout" size={24} color="#fff" />
              </View>
              <View>
                <Text style={styles.settingName}>Выйти</Text>
              </View>
            </View>
            <Ionicons name="arrow-forward" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Settings;
