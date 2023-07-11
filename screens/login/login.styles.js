import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    paddingVertical: 50,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
    alignItems: "center",
    flexGrow: 1,
  },
  loginField: {
    marginTop: 50,
    backgroundColor: colors.white,
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 30,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700,
  },
  inputField: {
    marginTop: 15,
  },
  inputText: {
    fontSize: 20,
    fontWeight: 500,
  },
  input: {
    borderBottomColor: colors.grayFinished,
    borderBottomWidth: 1,
    fontSize: 20,
    paddingVertical: 5,
  },
  submitBtn: {
    width: "100%",
    backgroundColor: colors.greenAccept,
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 10,
  },
  submitBtnText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500,
    color: colors.white,
  },
});

export default styles;
