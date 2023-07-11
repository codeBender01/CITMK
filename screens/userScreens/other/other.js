import { useRef } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./other.styles";
import PhoneInput from "react-native-phone-input";

function Other() {
  const phone = useRef(null);
  return (
    <View style={styles.container}>
      <View>
        <Text>Отправить заявку</Text>
        <Text>
          Введите свои контактные данные и кратко опишите свою проблему.
        </Text>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <Text>Имя</Text>
            <TextInput inputMode="text" />
          </View>
          <View style={styles.inputWrapper}>
            <Text>E-mail</Text>
            <TextInput inputMode="email" />
          </View>
          <View style={styles.inputWrapper}>
            <Text>Организация</Text>
            <TextInput inputMode="text" />
          </View>
          <View style={styles.inputWrapper}>
            <Text>Отдел</Text>
            <TextInput inputMode="text" />
          </View>
          <View style={styles.inputWrapper}>
            <PhoneInput
              ref={phone}
              style={{ backgroundColor: "white" }}
              initialCountry={"tm"}
              autoFormat={true}
              textProps={{
                maxLength: 14,
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text>Сообщение</Text>
            <TextInput multiline={true} numberOfLines={4} inputMode="text" />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Other;
