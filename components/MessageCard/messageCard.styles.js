import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    position: "relative",

    marginBottom: 10,
  },
  upper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  profileCircle: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 13,
  },
  profileInitials: {
    fontSize: 20,
    fontFamily: fonts.bold,
  },
  nameMessage: {
    flexGrow: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.mainFont,
  },
  message: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.secFont,
  },
  arrowDown: {
    position: "absolute",
    bottom: 0,
    minWidth: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    left: 0,
  },
  arrowUp: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    transform: [{ rotate: "180deg" }],
    minWidth: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 5,
    marginLeft: 10,
  },
  infoText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.mainFont,
    letterSpacing: 0.7,
  },
  actionBtns: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 15,
  },
  btn: {
    border: "1px solid #E0E0E9",
    width: "48%",
    paddingVertical: 10,
    marginBottom: 5,
  },
  btnEdit: {
    backgroundColor: colors.greenAccept,
  },
  btnDelete: {
    backgroundColor: colors.redDelete,
  },
  notif: {
    backgroundColor: colors.greenAccept,
    width: 10,
    height: 10,
    borderRadius: 50,
  },
});

export default styles;
