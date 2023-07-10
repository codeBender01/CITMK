import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: colors.navbarBg,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 700,
  },
  service: {
    flexDirection: "row",
  },
});

export default styles;
