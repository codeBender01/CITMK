import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 25,
    paddingTop: 50,
    marginHorizontal: "auto",
    position: "relative",
  },
  list: {
    height: Dimensions.get("window").height,
    width: "100%",
    gap: 10,
  },
});

export default styles;
