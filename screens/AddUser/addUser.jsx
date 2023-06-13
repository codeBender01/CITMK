import { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./addUser.styles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function AddUser({ navigation }) {
  const [isPickerPressed, setIsPickerPressed] = useState(false);
  const [role, setRole] = useState("");

  const handleSetRole = useCallback((role) => {
    setRole(role);
    setIsPickerPressed(false);
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsPickerPressed(false);
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}
        >
          <AntDesign name="arrowleft" size={35} color="black" />
        </TouchableOpacity>

        <View style={styles.initials}>
          <Text style={styles.initialsText}>Регистрация</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Имя пользователя*</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>E-mail*</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              inputMode="email"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Организация*</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Пароль*</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Права пользователя</Text>
            <View style={styles.picker}>
              <TextInput
                editable={false}
                style={styles.pickerInput}
                value={role}
              />
              <TouchableOpacity
                onPress={() => {
                  console.log(isPickerPressed);
                  setIsPickerPressed(!isPickerPressed);
                }}
                activeOpacity={1}
              >
                <FontAwesome5 name="caret-down" size={24} color="#868686" />
              </TouchableOpacity>
            </View>
            {isPickerPressed ? (
              <View style={styles.options}>
                <TouchableOpacity
                  onPress={() => {
                    setRole("user");
                    setIsPickerPressed(false);
                  }}
                >
                  <Text style={styles.option}>user</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setRole("admin");
                    setIsPickerPressed(false);
                  }}
                >
                  <Text style={styles.option}>admin</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Сохранить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AddUser;
