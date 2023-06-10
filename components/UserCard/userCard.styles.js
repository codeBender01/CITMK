import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { colors, fonts } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    position: "relative",
  },
  username: {
    fontFamily: fonts.bold,
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: colors.mainFont,
  },
  orgName: {
    fontFamily: fonts.regular,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 24,
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
  moreInfo: {
    flexDirection: "row",
  },
  infoText: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 15.6,
    lineHeight: 24,
    marginLeft: 5,
    color: colors.infoFont,
  },
  actionBtns: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 15,
  },
  btn: {
    border: "1px solid #E0E0E9",
    shadowColor: "rgba(131, 119, 198, 0.11)",
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
});

export default styles;
