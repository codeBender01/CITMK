import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    paddingVertical: 50,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
  },
  form: {},
});

export default styles;
