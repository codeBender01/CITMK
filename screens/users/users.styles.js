import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
    position: "relative",
  },
  addUserBtn: {
    backgroundColor: colors.greenAccept,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    paddingVertical: 10,
    position: "absolute",
    bottom: "3%",
    right: "3%",
  },
});

export default styles;
