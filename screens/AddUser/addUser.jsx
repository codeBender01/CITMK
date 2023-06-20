import { useState, useCallback, useEffect } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Alert,
  Platform,
} from "react-native";
import styles from "./addUser.styles";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import useSignup from "../../hooks/useSignup";
import { useStoreActions } from "easy-peasy";

function AddUser({ navigation }) {
  const [isPickerPressed, setIsPickerPressed] = useState(false);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const { signup, errorSignup, isLoading } = useSignup();
  const setCondition = useStoreActions(
    (actions) => actions.usersModel.setCondition
  );

  const handleSubmit = async () => {
    await signup(name, organization, email, role, password).then(() => {
      setName("");
      setOrganization("");
      setEmail("");
      setRole("");
      setPassword("");
      Alert.alert("New user is added!");
      setCondition(true);
      navigation.goBack();
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsPickerPressed(false);
      }}
    >
      <ScrollView style={styles.container}>
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
              onChange={({ nativeEvent }) => setName(nativeEvent.text)}
              value={name}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>E-mail*</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              inputMode="email"
              onChange={({ nativeEvent }) => setEmail(nativeEvent.text)}
              value={email}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Организация*</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              onChange={({ nativeEvent }) => setOrganization(nativeEvent.text)}
              value={organization}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Пароль*</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              secureTextEntry={true}
              onChange={({ nativeEvent }) => setPassword(nativeEvent.text)}
              value={password}
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
                  setIsPickerPressed(!isPickerPressed);
                }}
                activeOpacity={1}
              >
                <FontAwesome5 name="caret-down" size={24} color="#868686" />
              </TouchableOpacity>
            </View>
            {isPickerPressed ? (
              <View
                style={
                  Platform.OS === "ios"
                    ? styles.iosSelect
                    : styles.androidSelect
                }
              >
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

          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.submitBtnText}>Сохранить</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default AddUser;
