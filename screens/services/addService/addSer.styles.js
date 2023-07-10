import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 25,
    marginHorizontal: "auto",
    gap: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: fonts.bold,
  },
  input: {
    paddingVertical: 10,
  },
  textInput: {
    fontSize: 18,
    color: "#000",
    flexGrow: 1,
    borderRadius: 5,
  },
  form: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  pickerBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "relative",
    gap: 5,
    borderWidth: 1,
    borderColor: colors.grayFinished,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
  },

  androidSelect: {
    position: "absolute",
    top: 85,
    alignSelf: "center",
    width: "100%",
    shadowColor: "#000",
    elevation: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: colors.white,
    gap: 5,
    zIndex: 1000,
    elevation: 10000,
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
    gap: 5,
    zIndex: 100,
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderColor: colors.grayFinished,
    borderBottomWidth: 1,
  },

  last: {
    border: "none",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  option: {
    fontSize: 18,
    fontFamily: fonts.regular,
    paddingVertical: 5,
    paddingHorizontal: 10,
    minHeight: 50,
  },
  actionBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    elevation: 0,
    zIndex: -1,
  },

  submitBtn: {
    elevation: 0,
    zIndex: 0,
    backgroundColor: colors.greenAccept,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 5,
  },

  btnText: {
    color: colors.white,
    fontSize: 20,
  },
});

export default styles;
