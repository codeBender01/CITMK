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
    marginVertical: 10,
  },
  orgName: {
    color: colors.infoFont,
    fontStyle: "normal",
    fontSize: 16.4338,
    lineHeight: 22,
    fontFamily: fonts.bold,
    marginVertical: 10,
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
  orderLabel: {
    position: "absolute",
    right: 0,
    top: 0,

    paddingHorizontal: 30,
    paddingVertical: 3,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  orderLabelText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontWeight: 600,
    fontSize: 13.1471,
    lineHeight: 18,
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
