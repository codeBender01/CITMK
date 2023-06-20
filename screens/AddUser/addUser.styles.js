import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
    position: "relative",
    backgroundColor: colors.white,
  },

  backButton: {},

  initials: {
    width: "100%",
  },
  initialsText: {
    fontSize: 32,
    fontFamily: fonts.bold,
    textAlign: "center",
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 10,
    position: "relative",
  },

  label: {
    color: colors.grayFinished,
    fontSize: 18,
    fontFamily: fonts.regular,
  },
  input: {
    borderBottomColor: colors.greenAccept,
    borderBottomWidth: 1,
    fontSize: 18,
    paddingVertical: 5,

    borderStyle: "solid",
  },
  picker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.greenAccept,
    borderBottomWidth: 1,
  },
  pickerInput: {
    width: "90%",
    fontSize: 18,
    paddingVertical: 5,
    color: "black",
  },

  androidSelect: {
    width: "100%",
    shadowColor: "#000",
    elevation: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  iosSelect: {
    width: "100%",
    shadowColor: "#000",
    elevation: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
    position: "absolute",
    top: "100%",
    zIndex: 1,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  option: {
    fontSize: 18,
    fontFamily: fonts.regular,
    paddingVertical: 5,
    paddingHorizontal: 10,
    minHeight: 50,
  },
  submitBtn: {
    width: "100%",
    backgroundColor: colors.greenAccept,
    paddingVertical: 10,
    borderRadius: 10,
    zIndex: -1,
    position: "relative",
  },
  submitBtnText: {
    zIndex: 0,
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.white,
    textAlign: "center",
  },
});

export default styles;
