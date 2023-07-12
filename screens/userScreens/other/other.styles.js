import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../constants/theme";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
    paddingTop: 30,
  },
  wrap: {
    backgroundColor: colors.navbarBg,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bigText: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  desc: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.white,
  },
  form: {},
  label: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.white,
    marginBottom: 5,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 5,
    paddingVertical: 5,
    textAlignVertical: "top",
  },
  submitBtn: {
    backgroundColor: colors.white,
    borderRadius: 5,
    borderColor: colors.grayFinished,
    borderWidth: 1,
    marginTop: 10,
    paddingVertical: 3,
  },
  btnText: {
    textAlign: "center",
    color: colors.navbarBg,
    fontSize: 18,
    fontFamily: fonts.medium,
  },
  logout: {
    backgroundColor: colors.white,
    borderRadius: 5,
    width: "50%",
    alignSelf: "flex-end",
    marginTop: 10,
    paddingVertical: 5,
  },
  logoutText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: fonts.bold,
    color: colors.navbarBg,
  },
});

export default styles;
